import React from "react";
import "./App.css";
import { boardArray } from "./board";

const App: React.FC = () => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const clickedBox = event.currentTarget as HTMLDivElement;

    let boardText = (clickedBox.textContent = "");
    // const index: number = parseInt(clickedBox.dataset.id || "", 10);
    // let boardText = boardArray[index - 1].text;
    // boardText = clickedBox.textContent;

    let xArray: any = [];
    let oArray: any = [];

    if (oArray.length <= xArray.length) {
      clickedBox.textContent = "O";
    } else clickedBox.textContent = "X";

    for (let i = 0; i < boardArray.length; i++) {
      if (boardText === "X") {
        xArray.push(boardText);
      } else if (boardText === "Y") {
        oArray.push(boardText);
      }
    }
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
