import * as React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Subtrackt
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function LandingPage() {
  return (
    <div className="big-image">
      <div className="overlay">
        <div className="landing-nav">
          <Link to="/" className="landing-nav-title">
            <h1>Subtrackt</h1>
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
          <p className="hero-text">Subtrackt</p>
          <p className="hero-subtext">
            Your one stop shop for all of your video subscription tracking needs!
          </p>
        </div>
      </div>
      <Copyright sx={{ mt: 5 }} />
    </div>
  );
}

export default LandingPage;
