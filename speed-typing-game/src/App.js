import React from "react";
import useWordGame from "./hooks/useWordGame";
import "./App.css";

function App() {
  const {
    textBoxRef,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
    time,
    setTime,
    setText,
    setTimeRemaining,
  } = useWordGame(10);

  return (
    <>
      <h1>How fast can You type?</h1>
      <textarea
        onChange={(e) => setText(e.target.value)}
        ref={textBoxRef}
        value={text}
        disabled={!isTimeRunning}
        placeholder="Welcome to Speed Typing Game! Please set your custom time below or play by default 10 seconds by clicking on START button!"
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <input
        type="number"
        placeholder="SET DESIRED TIME!"
        onChange={(e) => setTimeRemaining(e.target.value)}
        id="test"
        value={time}
      />

      <button
        onClick={() => {
          setTime();
          startGame();
        }}
      >
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </>
  );
}

export default App;
