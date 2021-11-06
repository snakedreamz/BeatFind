import React from "react";
import "./SplashPage.css";

const SplashPage = () => {
  return (
    <div className="splash-container">
      <div className="description-container">
        <div className="description">
          <h1>Find your inspiration.</h1>
          <p>
            Join the BeatFind community, home to tens of billions of photos of
            your favorite moments.
          </p>
          <button className="description-signupBtn">Start for free</button>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
