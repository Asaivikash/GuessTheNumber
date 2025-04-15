import React from "react";
import GuessTheNumberGame from "./GuessTheNumberGame";
import "./App.css";

function App() {
  return (
    <div className="app">
      <video autoPlay loop muted className="background-video">
        <source src="/space.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <GuessTheNumberGame />
      </div>
    </div>
  );
}

export default App;
