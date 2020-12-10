import { useState, useEffect, useRef } from "react";

function useWordGame(startingTime = 10) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordArr = text.trim().split(" ");
    return wordArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(startingTime);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      return endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  };
}
export default useWordGame;
