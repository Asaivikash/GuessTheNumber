import React, { useState } from "react";
import "./GuessTheNumberGame.css";

export default function GuessTheNumberGame() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [target, setTarget] = useState(null);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);
    if (!isNaN(minVal) && !isNaN(maxVal) && minVal < maxVal) {
      setTarget(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
      setAttempts(0);
      setMessage("");
      setGameStarted(true);
      setGuess("");
    } else {
      setMessage("Please enter a valid range where min < max.");
    }
  };

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    if (isNaN(numGuess)) {
      setMessage("Enter a valid number!");
      return;
    }

    setAttempts((prev) => prev + 1);

    if (numGuess < min || numGuess > max) {
      setMessage(`Your guess is way too off. Take a guess between ${min} and ${max}.`);
    } else if (numGuess < target) {
      setMessage("Too small!");
    } else if (numGuess > target) {
      setMessage("UMM, too big!");
    } else {
      setMessage(`You guessed it! It was ${target}. Your guess is as sharp as a katana! 🎯 (Attempts: ${attempts + 1})`);
      setGameStarted(false);
    }

    setGuess("");
  };

  // 🔑 Handle Enter key for both stages
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (gameStarted) {
        handleGuess();
      } else {
        startGame();
      }
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-title">🎮 Guess the Number
        <span className="help-icon" title="Enter a min and max value. Try to guess the number hidden between them. You'll get hints!">❓</span>
      </h1>

      {!gameStarted && (
        <div className="input-group">
          <input
            type="number"
            placeholder="Enter min value"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <input
            type="number"
            placeholder="Enter max value"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={startGame}>Start Game</button>
        </div>
      )}

      {gameStarted && (
        <div className="input-group">
          <p>Enter a number between {min} and {max}:</p>
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleGuess}>Guess</button>
        </div>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
}
