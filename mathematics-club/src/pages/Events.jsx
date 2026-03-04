import "./Events.css";
import { Link } from "react-router-dom";

function Events() {
  return (
    <>
      {/* HERO */}
      <section className="events-hero">
        <div className="events-hero-container">
          <h1>Trade Matrix</h1>
          <p>
            A virtual trading competition where logic meets real market strategy.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="events-section">
        <div className="events-container">

          <h2>Event Overview</h2>
          <p>
            Trade Matrix is a simulation-based trading competition designed
            to test participants' analytical thinking, risk management, and
            decision-making skills in a virtual market environment.
          </p>

        </div>
      </section>

      {/* FORMAT */}
      <section className="events-section-dark">
        <div className="events-container">

          <h2>Format & Structure</h2>
          <ul>
            <li>Virtual trading simulation platform</li>
            <li>Live market fluctuations</li>
            <li>Team-based competition (3 members per team)</li>
            <li>Strategy, timing, and analytics driven scoring</li>
          </ul>

        </div>
      </section>

      {/* RULES */}
      <section className="events-section">
        <div className="events-container">

          <h2>Rules & Guidelines</h2>
          <ul>
            <li>Each team starts with equal virtual capital</li>
            <li>No external financial assistance allowed</li>
            <li>Market decisions must be team consensus</li>
            <li>Final rankings based on portfolio value</li>
          </ul>

        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="events-section-dark">
        <div className="events-container">

          <h2>Eligibility</h2>
          <ul>
            <li>Open to all MITS DU students</li>
            <li>Team size: 3 members</li>
            <li>Registration mandatory</li>
          </ul>

        </div>
      </section>

      {/* PRIZES */}
      <section className="events-section">
        <div className="events-container">

          <h2>Prize Pool</h2>
          <p className="prize-highlight">₹10,000 Total Prize</p>
          <p>Top teams will be awarded certificates and cash prizes.</p>

          <Link to="/register" className="events-btn">
            Register Now
          </Link>

        </div>
      </section>
    </>
  );
}

export default Events;