import Countdown from "../components/Countdown";
import CandlestickChart from "../components/CandlestickChart";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <section className="hero">
      <div className="grid-overlay"></div>

      <div className="hero-split">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="trade">TRADE</span>{" "}
            <span className="matrix">MATRIX</span>
          </h1>

          <p className="hero-description">
            Where Logic Meets Markets.
            A Virtual Trading Competition Powered by Strategy & Mathematics.
          </p>
      
          <Link to="/register" className="hero-btn">
            Register Now
          </Link>

          {/* Event Authority Section */}
          <div className="event-meta">
            <div className="meta-item">
              <span className="meta-label">Date</span>
              <span className="meta-value">21 March 2026</span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Prize Pool</span>
              <span className="meta-value">₹10,000</span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Team Size</span>
              <span className="meta-value">3 Members</span>
            </div>
          </div>
          <Countdown />
        </div>

        <div className="hero-right">
          <CandlestickChart />
        </div>
      </div>
    </section>
    {/* WHY PARTICIPATE SECTION */}
<section className="why-section">
  <div className="why-container">

    <h2 className="why-title">Why Participate?</h2>

    <div className="why-grid">

      <div className="why-card">
        <h3>Real Market Simulation</h3>
        <p>
          Experience a realistic trading environment where strategy,
          timing, and analytics determine success.
        </p>
      </div>

      <div className="why-card">
        <h3>Strategic Team Play</h3>
        <p>
          Collaborate in teams of three, combine logic and intuition,
          and outperform your competitors.
        </p>
      </div>

      <div className="why-card">
        <h3>Compete & Win ₹10,000</h3>
        <p>
          Test your decision-making skills, climb the leaderboard,
          and compete for the ultimate prize.
        </p>
      </div>

    </div>
  </div>
</section>
{/* CONTACT SECTION */}
<section className="contact-section">
  <div className="contact-container">

    <h2 className="contact-title">Contact & Coordination</h2>

    <div className="contact-card">

      <div className="contact-item">
        <h4>Faculty Coordinator</h4>
        <p>Dr. Vijay Sharma</p>
      </div>

      <div className="contact-item">
        <h4>Student Coordinator</h4>
        <p>Aakash Verma</p>
      </div>

      <div className="contact-item">
        <h4>Email</h4>
        <p>-</p>
      </div>

      <div className="contact-item">
        <h4>Venue</h4>
        <p>MITS DU</p>
      </div>

    </div>

  </div>
</section>
  </>
  );
}

export default Home;