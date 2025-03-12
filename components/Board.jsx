import React, { useState, useEffect } from "react";
import Square from "./Square";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);

  //   counting score of player

  const [playerXScore, setPlayerXScore] = useState(0);
  const [playerOScore, setPlayerOScore] = useState(0);

  //   check winner logic
  const checkWinner = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
        setIsGameOver(true);
        setWinner(state[a]);
        setWinningCells([a, b, c]);

        // increment score
        if (state[a] == "X") {
          setPlayerXScore((prev) => prev + 1);
        } else if (state[a] == "O") {
          setPlayerOScore((prev) => prev + 1);
        }

        resetBoard();
        break;
      } else if (state.every((cell) => cell !== null)) {
        setTimeout(() => setState(Array(9).fill(null)), 1500);
      }
    }

    return null;
  };

  // reset board game function
  function resetBoard(delay = 1500) {
    setTimeout(() => {
      setState(Array(9).fill(null));
      setIsGameOver(false);
      setWinner(null);
      setWinningCells([]);
    }, delay);
  }

  //   reset score
  function resetScore() {
    setPlayerOScore(0);
    setPlayerXScore(0);
  }

  //   click handler
  const clickHandler = (index) => {
    if (state[index] == null && !isGameOver) {
      let val = xTurn ? "X" : "O";
      setXTurn(!xTurn);
      let newArr = [...state];
      newArr[index] = val;

      setState(newArr);
    }
  };

  //   check for winner everytime when the state is updated
  useEffect(() => {
    checkWinner();
  }, [state]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-evenly h-screen relative">
      {/* Player X Infos */}
      <div className="score-board text-white flex w-full justify-evenly rotate-180 sm:rotate-0">
        <div
          className={`${
            xTurn ? "ring-4 shadow-md" : "shadow-xs"
          } h-32 w-32 border border-green-500 px-5 rounded-2xl py-2 shadow-green-300  ring-green-500 flex items-center flex-col justify-around`}
        >
          <h1 className="text-4xl font-bold">X</h1>
          <span>SCORE {playerXScore}</span>
        </div>
      </div>

      {/* main game board */}
      <div className="main-board">
        <div className="flex">
          {[0, 1, 2].map((element, key) => (
            <Square
              key={key}
              value={state[element]}
              clickHandler={() => clickHandler(element)}
              isWinningCell={winningCells.includes(element)}
              winner={winner}
            />
          ))}
        </div>
        <div className="flex">
          {[3, 4, 5].map((element, key) => (
            <Square
              key={key}
              value={state[element]}
              clickHandler={() => clickHandler(element)}
              isWinningCell={winningCells.includes(element)}
              winner={winner}
            />
          ))}
        </div>
        <div className="flex">
          {[6, 7, 8].map((element, key) => (
            <Square
              key={key}
              value={state[element]}
              clickHandler={() => clickHandler(element)}
              isWinningCell={winningCells.includes(element)}
              winner={winner}
            />
          ))}
        </div>

        <div className="buttons hidden sm:flex mt-15 justify-evenly w-full px-10">
          <button
            onClick={resetScore}
            className="bg-green-500 px-2 py-1 rounded-md font-semibold"
          >
            Reset Score
          </button>
          <button
            onClick={() => resetBoard(0)}
            className="bg-red-500 px-2 py-1 rounded-md font-semibold"
          >
            Reset Board
          </button>
        </div>
      </div>

      {/* Player O Infos */}
      <div className="score-board text-white flex w-full justify-evenly">
        <div
          className={`${
            xTurn ? "shadow-xs" : "ring-4 shadow-md"
          } h-32 w-32 border border-red-500 px-5 rounded-2xl py-2 shadow-red-300 ring-red-500 flex items-center flex-col justify-around`}
        >
          <h1 className="text-4xl font-bold">O</h1>
          <span>SCORE {playerOScore}</span>
        </div>
      </div>

      <div className="buttons sm:hidden flex justify-evenly w-full px-10">
        <button
          onClick={resetScore}
          className="bg-green-500 px-2 py-1 rounded-md font-semibold cursor-pointer"
        >
          Reset Score
        </button>
        <button
          onClick={() => resetBoard(0)}
          className="bg-red-500 px-2 py-1 rounded-md font-semibold cursor-pointer"
        >
          Reset Board
        </button>
      </div>
    </div>
  );
}

export default Board;
