import React from "react";
import useWordGame from "./hooks/useWordGame";
import "./App.css";

function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame(10);
  return (
    <>
      <h1>How fast can You type?</h1>
      <textarea
        onChange={handleChange}
        ref={textBoxRef}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </>
  );
}

export default App;
