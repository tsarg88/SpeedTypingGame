import { useState, useEffect, useRef } from "react";

function useWordGame(startingTime = 10) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);
  const [time, setTime] = useState();

  //   function handleChange(event) {
  //     // console.log("something");
  //     const { name, value } = event.target;
  //     // setTimeRemaining(event.target.value)
  //     setText(value);
  //     setTimeRemaining({ [name]: value });
  //   }

  function calculateWordCount(text) {
    const wordArr = text.trim().split(" ");
    return wordArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(timeRemaining > 0 ? timeRemaining : startingTime);
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
      return endGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining, isTimeRunning]);

  return {
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
  };
}
export default useWordGame;
