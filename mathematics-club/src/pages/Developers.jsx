import "./Developers.css";

function Developers() {
  return (
    <>
      {/* HERO */}
      <section className="dev-hero">
        <div className="dev-hero-container">
          <h1>Development Team</h1>
          <p>Engineered with precision, architecture, and performance focus.</p>
        </div>
      </section>

      {/* LEAD DEVELOPER */}
      <section className="dev-section">
        <div className="dev-container">

          <h2 className="dev-section-title">Lead Developer</h2>

          <div className="dev-card highlight">
            <div className="dev-image">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQG6jDnvqaduug/profile-displayphoto-scale_400_400/B56Zh6yM3eHkAg-/0/1754406639256?e=1773878400&v=beta&t=VoxAaS082KjtkK9qLG3GTYCp7pzYOf9y_ey4r-0OCjw"
                alt="Krishna Paliwal"
              />
            </div>

            <h3>Krishna Paliwal</h3>
            <p className="dev-role">Full Stack Architect</p>

            <p className="dev-description">
              Designed, developed, and deployed the complete Mathematics Club
              platform including frontend architecture, backend logic, database
              integration, and hosting infrastructure.
            </p>

            <div className="dev-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>RDBMS</span>
              <span>Hosting</span>
              <span>UI/UX</span>
            </div>

            <div className="dev-links">
              <a href="https://github.com/krishnapaliwal8791" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/krishna-paliwal/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTRIBUTOR */}
      <section className="dev-section-dark">
        <div className="dev-container">

          <h2 className="dev-section-title">Frontend Contributor</h2>

          <div className="dev-card">
            <div className="dev-image">
              <img
                src="https://your-image-link/harsh.jpg"
                alt="Harsh Kushwah"
              />
            </div>

            <h3>Harsh Kushwah</h3>
            <p className="dev-role">Frontend Support</p>

            <p className="dev-description">
              Assisted in frontend implementation and UI refinement
              during the development phase.
            </p>

            <div className="dev-stack">
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <div className="dev-links">
              <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Developers;