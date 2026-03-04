import "./About.css";

function About() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-container">
          <h1>Mathematics Club – MITS DU</h1>
          <p>
            Building analytical thinkers through mathematics, strategy,
            and real-world problem solving.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="about-section">
        <div className="about-container">

          <div className="about-block">
            <h2>Our Vision</h2>
            <p>
              To cultivate a culture of logical reasoning, quantitative
              thinking, and analytical excellence among students.
            </p>
          </div>

          <div className="about-block">
            <h2>Our Mission</h2>
            <p>
              To organize intellectually stimulating events, workshops,
              and competitions that connect academic mathematics with
              practical applications.
            </p>
          </div>

          <div className="about-block">
            <h2>Core Focus Areas</h2>
            <ul>
              <li>Strategic Thinking & Decision Making</li>
              <li>Financial & Market Simulations</li>
              <li>Logical Reasoning Challenges</li>
              <li>Interactive Campus Engagement</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FLAGSHIP EVENTS */}
      <section className="about-section-dark">
        <div className="about-container">

          <h2 className="section-title">Flagship Events</h2>

          <div className="events-grid">

            <div className="event-card">
              <h3>Trade Matrix</h3>
              <p>
                A virtual trading competition simulating real market dynamics.
                Participants analyze trends, manage risk, and compete through
                strategic financial decisions.
              </p>
            </div>

            <div className="event-card">
              <h3>Number Ninjas</h3>
              <p>
                An offline mathematics challenge focused on logical reasoning,
                quick calculations, and analytical problem-solving. Conducted
                under official institutional approval.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CAMPUS ENGAGEMENT */}
      <section className="about-section">
        <div className="about-container">

          <h2 className="section-title">Campus Engagement</h2>

          <div className="engagement-card">
            <h3>Aarunya – Annual Fest Participation</h3>
            <p>
              The Mathematics Club actively participated in Aarunya,
              the annual fest of MITS DU, by setting up an interactive
              mathematics stall.
            </p>
            <p>
              Various analytical and logic-based games were conducted,
              attracting significant student participation and promoting
              mathematical thinking in an engaging format.
            </p>
          </div>

        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="about-section-dark">
        <div className="stats-container">

          <div className="stat-card">
            <h3>5+</h3>
            <p>Years Active</p>
          </div>

          <div className="stat-card">
            <h3>25+</h3>
            <p>Events Organized</p>
          </div>

          <div className="stat-card">
            <h3>500+</h3>
            <p>Participants Engaged</p>
          </div>

        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="about-section">
        <div className="about-container">

          <h2 className="section-title">Leadership & Faculty</h2>

          <div className="leadership-grid">
            <div className="leader-card">
              <h4>Faculty Coordinator</h4>
              <p>Dr. Vijay Sharma</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;