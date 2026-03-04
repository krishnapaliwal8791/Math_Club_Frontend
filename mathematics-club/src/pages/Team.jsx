import "./Team.css";

function Team() {
  const teamMembers = [
    {
      name: "Dr. Vijay S. Sharma",
      role: "Faculty Coordinator",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQETAQqckJxU4A/profile-displayphoto-scale_400_400/B4DZtZhab2IAAk-/0/1766733524282?e=1773878400&v=beta&t=PBHc8R07-byzf-RXR4DGiphj_Naror3kwAG5uPWy41Y",
      linkedin: "#",
      github: null,
      section: "faculty",
    },
    {
      name: "Kratika Samadhiya",
      role: "President",
      image: "https://your-image-link/kratika.jpg",
      linkedin: "#",
      github: null,
      section: "core",
    },
    {
      name: "Arpit Agrawal",
      role: "Secretary",
      image: "https://your-image-link/arpit.jpg",
      linkedin: "#",
      github: null,
      section: "core",
    },
    {
      name: "Karishma Kushwaha",
      role: "Management Head",
      image: "https://your-image-link/karishma.jpg",
      linkedin: "#",
      github: null,
      section: "core",
    },
    {
      name: "Krishna Jha",
      role: "Technical Head",
      image: "https://your-image-link/krishna.jpg",
      linkedin: "#",
      github: "#",
      section: "core",
    },
    {
      name: "Aaditya Pal",
      role: "Video Editing Head",
      image: "https://your-image-link/aaditya.jpg",
      linkedin: "#",
      github: null,
      section: "core",
    },
    {
      name: "Harshita Sharma",
      role: "Marketing Head",
      image: "https://your-image-link/harshita.jpg",
      linkedin: "#",
      github: null,
      section: "core",
    },
    {
      name: "Jaydeep Singh Baghel",
      role: "Content Head",
      image: "https://your-image-link/jaydeep.jpg",
      linkedin: "#",
      github: null,
      section: "core",
    },
    {
      name: "Aum Mehta",
      role: "Event Manager – Trade Matrix",
      image: "https://your-image-link/aum.jpg",
      linkedin: "#",
      github: null,
      section: "event",
    },
  ];

  const faculty = teamMembers.filter(m => m.section === "faculty");
  const core = teamMembers.filter(m => m.section === "core");
  const eventLead = teamMembers.filter(m => m.section === "event");

  const renderCards = (members) =>
    members.map((member, index) => (
      <div className="team-card" key={index}>
        <div className="team-image">
          <img src={member.image} alt={member.name} />
        </div>

        <h3>{member.name}</h3>
        <p className="team-role">{member.role}</p>

        <div className="team-links">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    ));

  return (
    <>
      <section className="team-hero">
        <div className="team-hero-container">
          <h1>Our Team</h1>
          <p>
            The people driving innovation, leadership, and excellence
            at Mathematics Club, MITS DU.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="team-container">
          <h2 className="section-title">Faculty Coordinator</h2>
          <div className="team-grid single">
            {renderCards(faculty)}
          </div>
        </div>
      </section>

      <section className="team-section-dark">
        <div className="team-container">
          <h2 className="section-title">Core Team</h2>
          <div className="team-grid">
            {renderCards(core)}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="team-container">
          <h2 className="section-title">Event Leadership</h2>
          <div className="team-grid single">
            {renderCards(eventLead)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;