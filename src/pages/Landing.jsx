import React from "react";
import "./Landing.css";

function Landing({ goTo }) {
  return (
    <div className="landing">
      <h1 id="title">Literature</h1>
      <button id="go-text" onClick={goTo}>
        &darr;
      </button>
    </div>
  );
}

export default Landing;
