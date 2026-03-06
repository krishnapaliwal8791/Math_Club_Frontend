const SUPABASE_URL = "https://kulzpvgrpofrkjsxokdj.supabase.co"
const SUPABASE_ANON_KEY = "sb_publishable_ZqJtYD8SAlSgZMrlJNqLjA_1kFtI-KS"

let supabaseClient  = window.supabase.createClient(
SUPABASE_URL,
SUPABASE_ANON_KEY
)

const participantType = document.getElementById("participantType")
const teamSize = document.getElementById("teamSize")

const leaderMits = document.getElementById("leaderMitsFields")
const leaderNonMits = document.getElementById("leaderNonMitsFields")

const membersContainer = document.getElementById("membersContainer")

const form = document.getElementById("registerForm")


// PARTICIPANT TYPE CHANGE

participantType.addEventListener("change", () => {

if(participantType.value === "mits"){

leaderMits.style.display = "block"
leaderNonMits.style.display = "none"

}

else if(participantType.value === "nonmits"){

leaderMits.style.display = "none"
leaderNonMits.style.display = "block"

}

generateMembers()

})


// GENERATE TEAM MEMBERS

function generateMembers(){

membersContainer.innerHTML = ""

if(!teamSize.value || !participantType.value) return

let count = teamSize.value === "duo" ? 1 : 3

for(let i = 1; i <= count; i++){

let extraField = participantType.value === "mits"
? '<input type="text" class="memberExtra" placeholder="Enrollment Number" required>'
: '<input type="text" class="memberExtra" placeholder="College Name" required>'

membersContainer.innerHTML += `

<div class="member">

<h3>Member ${i}</h3>

<input type="text" class="memberName" placeholder="Member Name" required>

<input type="email" class="memberEmail" placeholder="Member Email" required>

<input type="tel" class="memberPhone" placeholder="Member Phone" required>

${extraField}

</div>

`

}

}

teamSize.addEventListener("change", generateMembers)


// FORM SUBMIT

form.addEventListener("submit", async function(e){

e.preventDefault()

try{

const category = participantType.value
const team_type = teamSize.value
const team_name = document.getElementById("teamName").value

const leader_name = document.getElementById("leaderName").value
const leader_email = document.getElementById("leaderEmail").value
const leader_phone = document.getElementById("leaderPhone").value

let branch = null
let enrollment = null
let college = null

if(category === "mits"){

branch = document.getElementById("leaderBranch")?.value || null
enrollment = document.getElementById("leaderEnrollment")?.value || null

}
else{

college = document.getElementById("leaderCollege")?.value || null

}


//////////////////////////////////////////////////
// INSERT TEAM
//////////////////////////////////////////////////

const { data: teamData, error: teamError } = await supabaseClient
.from("Teams")
.insert([
{
category,
team_type,
team_name,
leader_name,
leader_email,
leader_phone,
branch,
enrollment,
college
}
])
.select()
.single()

if(teamError){

console.error(teamError)
alert("Team registration failed")
return

}

const teamId = teamData.id


//////////////////////////////////////////////////
// INSERT MEMBERS
//////////////////////////////////////////////////

let members = []

document.querySelectorAll(".member").forEach(member => {

members.push({

team_id: teamId,
name: member.querySelector(".memberName").value,
email: member.querySelector(".memberEmail").value,
phone: member.querySelector(".memberPhone").value,
extra: member.querySelector(".memberExtra").value

})

})

if (members.length === 0) {
  alert("No team members found")
  return
}

const { error: memberError } = await supabaseClient
.from("team_members")
.insert(members)

if(memberError){

console.error(memberError)
alert("Member registration failed")
return

}


//////////////////////////////////////////////////
// SUCCESS
//////////////////////////////////////////////////

alert("Team registered successfully!")

form.reset()
membersContainer.innerHTML = ""

}
catch(err){

console.error(err)
alert("Something went wrong")

}

})