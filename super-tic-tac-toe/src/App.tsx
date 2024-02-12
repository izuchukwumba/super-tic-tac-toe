import React from "react";
import "./App.css";
import { boardArray } from "./board";

const App: React.FC = () => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const clickedBox = event.currentTarget as HTMLDivElement;

    // let boxText = clickedBox.textContent;
    // const index: number = parseInt(clickedBox.dataset.id || "", 10);
    // let boardText = boardArray[index - 1].text;
    // boardText = clickedBox.textContent;

    if (clickedBox.textContent === "X" || clickedBox.textContent === "O") {
      return;
    }

    let mainBox = document.querySelectorAll(".main-box");
    let xCount: any = Array.from(mainBox).filter(
      (box) => box.textContent === "X"
    ).length;
    let oCount: any = Array.from(mainBox).filter(
      (box) => box.textContent === "O"
    ).length;

    if ((xCount === 0 && oCount === 0) || xCount === oCount) {
      clickedBox.textContent = "X";
    } else if (xCount > oCount) clickedBox.textContent = "O";
    // if (oArray.length <= xArray.length) {
    //   clickedBox.textContent = "O";
    // } else clickedBox.textContent = "X";

    // for (let i = 0; i < boardArray.length; i++) {
    //   if (boardText === "X") {
    //     xArray.push(boardText);
    //   } else if (boardText === "O") {
    //     oArray.push(boardText);
    //   }
  };
  return (
    <div className="App">
      <div className="main-box">
        {boardArray.map((item) => (
          <div
            key={item.id}
            className={item.className}
            onClick={handleClick}
            data-id={item.id}
          >
            {/* {item.textContent} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
