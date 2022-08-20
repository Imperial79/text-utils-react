import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <h1
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        About
      </h1>
      <p
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        This React app is my first SPA Web App. This web app allows users to
        modify texts or paragraphs.
      </p>
    </div>
  );
}
