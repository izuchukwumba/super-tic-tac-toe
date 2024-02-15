import React, { useState, useEffect } from "react";
import "./App.css";
import { boardArray } from "./board";

const App: React.FC = () => {
  const [xArray, setXArray] = useState<HTMLDivElement[]>([]);
  const [oArray, setOArray] = useState<HTMLDivElement[]>([]);
  const [updatedBoardArray, setUpdatedBoardArray] = useState(boardArray);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const clickedBox = event.currentTarget as HTMLDivElement;

    // updateArrays(clickedBox);
    // checkWinner();

    if (clickedBox.textContent === "X" || clickedBox.textContent === "O") {
      return;
    }
    if (winner) {
      return;
    }
    // let boxText = clickedBox.textContent;
    // const index: number = parseInt(clickedBox.dataset.id || "", 10);
    // let boardText = boardArray[index - 1].text;
    // boardText = clickedBox.textContent;

    const allBoxes = document.querySelectorAll(".box");
    // let xArray = Array.from(allBoxes).filter((box) => box.textContent === "X");
    // let oArray = Array.from(allBoxes).filter((box) => box.textContent === "O");
    let xCount: any = xArray.length;
    let oCount: any = oArray.length;

    if (xCount === 0 || xCount === oCount) {
      clickedBox.textContent = "X";
      setXArray((prev) => [...prev, clickedBox]);
      // setUpdatedBoardArray({ ...prev, text: clickedBox.textContent });
    } else {
      clickedBox.textContent = "O";
      setOArray((prev) => [...prev, clickedBox]);
    }
    // if (oArray.length <= xArray.length) {
    //   clickedBox.textContent = "O";
    // } else clickedBox.textContent = "X";

    // for (let i = 0; i < boardArray.length; i++) {
    //   if (boardText === "X") {
    //     xArray.push(boardText);
    //   } else if (boardText === "O") {
    //     oArray.push(boardText);
    //   }

    // console.log(xCount, oCount);
    // console.log(oCount);
    // console.log(["yam"]);

    checkWinner();
    console.log(updatedBoardArray);

    // setWinner(null);
  };

  function checkWinner() {
    if (
      (xArray.some((box) => box.classList.contains("top-left")) &&
        xArray.some((box) => box.classList.contains("top-mid")) &&
        xArray.some((box) => box.classList.contains("top-right"))) ||
      (xArray.some((box) => box.classList.contains("mid-left")) &&
        xArray.some((box) => box.classList.contains("mid-mid")) &&
        xArray.some((box) => box.classList.contains("mid-right"))) ||
      (xArray.some((box) => box.classList.contains("bottom-left")) &&
        xArray.some((box) => box.classList.contains("bottom-mid")) &&
        xArray.some((box) => box.classList.contains("bottom-right"))) ||
      (xArray.some((box) => box.classList.contains("top-left")) &&
        xArray.some((box) => box.classList.contains("mid-left")) &&
        xArray.some((box) => box.classList.contains("bottom-left"))) ||
      (xArray.some((box) => box.classList.contains("top-mid")) &&
        xArray.some((box) => box.classList.contains("mid-mid")) &&
        xArray.some((box) => box.classList.contains("bottom-mid"))) ||
      (xArray.some((box) => box.classList.contains("top-right")) &&
        xArray.some((box) => box.classList.contains("mid-right")) &&
        xArray.some((box) => box.classList.contains("bottom-right"))) ||
      (xArray.some((box) => box.classList.contains("top-left")) &&
        xArray.some((box) => box.classList.contains("mid-mid")) &&
        xArray.some((box) => box.classList.contains("bottom-right"))) ||
      (xArray.some((box) => box.classList.contains("top-right")) &&
        xArray.some((box) => box.classList.contains("mid-mid")) &&
        xArray.some((box) => box.classList.contains("bottom-left")))
    ) {
      console.log("X wins");
      endGame();
      setWinner("X");
    } else if (
      (oArray.some((box) => box.classList.contains("top-left")) &&
        oArray.some((box) => box.classList.contains("top-mid")) &&
        oArray.some((box) => box.classList.contains("top-right"))) ||
      (oArray.some((box) => box.classList.contains("mid-left")) &&
        oArray.some((box) => box.classList.contains("mid-mid")) &&
        oArray.some((box) => box.classList.contains("mid-right"))) ||
      (oArray.some((box) => box.classList.contains("bottom-left")) &&
        oArray.some((box) => box.classList.contains("bottom-mid")) &&
        oArray.some((box) => box.classList.contains("bottom-right"))) ||
      (oArray.some((box) => box.classList.contains("top-left")) &&
        oArray.some((box) => box.classList.contains("mid-left")) &&
        oArray.some((box) => box.classList.contains("bottom-left"))) ||
      (oArray.some((box) => box.classList.contains("top-mid")) &&
        oArray.some((box) => box.classList.contains("mid-mid")) &&
        oArray.some((box) => box.classList.contains("bottom-mid"))) ||
      (oArray.some((box) => box.classList.contains("top-right")) &&
        oArray.some((box) => box.classList.contains("mid-right")) &&
        oArray.some((box) => box.classList.contains("bottom-right"))) ||
      (oArray.some((box) => box.classList.contains("top-left")) &&
        oArray.some((box) => box.classList.contains("mid-mid")) &&
        oArray.some((box) => box.classList.contains("bottom-right"))) ||
      (oArray.some((box) => box.classList.contains("top-right")) &&
        oArray.some((box) => box.classList.contains("mid-mid")) &&
        oArray.some((box) => box.classList.contains("bottom-left")))
    ) {
      console.log("O Wins");
      endGame();
      setWinner("O");
    }
  }
  function endGame() {
    const endGameArray = updatedBoardArray.map((item) => {
      return { ...item, text: "" };

      // updatedBoardArray.map((item) => (item.textContent = ""));
    });

    setUpdatedBoardArray(endGameArray);
    // setXArray([]);
    // setOArray([]);
    console.log("Game ended");
    console.log(updatedBoardArray);
    return true;
  }

  useEffect(() => {
    // This will run after the component has re-rendered due to state changes
    // Any action that needs to be performed after the state has been updated can be placed here
    console.log(xArray.length, oArray.length);

    setUpdatedBoardArray((prevBoardArray) => {
      return prevBoardArray.map((item) => {
        if (xArray.some((box) => box.classList.contains(item.className))) {
          return { ...item, text: "X" };
        } else if (
          oArray.some((box) => box.classList.contains(item.className))
        ) {
          return { ...item, text: "O" };
        } else {
          return { ...item, text: "" };
        }
      });
    });
    checkWinner();
  }, [xArray, oArray]);

  return (
    <div className="App">
      <div className="main-box">
        {updatedBoardArray.map((item) => (
          <div
            key={item.id}
            className={item.className}
            onClick={handleClick}
            data-id={item.id}
          >
            {!winner || item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
