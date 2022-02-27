import * as React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="big-image">
      <div className="overlay">
        <div className="landing-nav">
          <Link to="/" className="landing-nav-title">
            <h1>VideoSubTrack</h1>
          </Link>

          <nav className="landing-navbar">
            <>
              <Link to="/login" className="landing-list-item">
                Login
              </Link>
              <Link to="/signup" className="landing-list-item">
                Signup
              </Link>
            </>
          </nav>
        </div>
        <div>
          <p className="hero-text">Video Streaming Subscriptions Tracker </p>
          <p className="hero-subtext">
            Your handy dandy Video Streaming Subscription Ready-Reckoner!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
