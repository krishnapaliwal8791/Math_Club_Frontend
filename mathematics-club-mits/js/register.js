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


// FORM SUBMISSION

form.addEventListener("submit", function(e){

e.preventDefault()

const data = {

participantType: participantType.value,

teamSize: teamSize.value,

teamName: document.getElementById("teamName").value,

leader:{

name: document.getElementById("leaderName").value,
email: document.getElementById("leaderEmail").value,
phone: document.getElementById("leaderPhone").value,
branch: document.getElementById("leaderBranch")?.value || null,
enrollment: document.getElementById("leaderEnrollment")?.value || null,
college: document.getElementById("leaderCollege")?.value || null

},

members:[]

}


// COLLECT MEMBERS

document.querySelectorAll(".member").forEach(member => {

data.members.push({

name: member.querySelector(".memberName").value,
email: member.querySelector(".memberEmail").value,
phone: member.querySelector(".memberPhone").value,
extra: member.querySelector(".memberExtra").value

})

})


console.log("Registration Data:", data)

})