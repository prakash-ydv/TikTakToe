import React from "react";

function Square(props) {
  return (
    <div
      onClick={props.clickHandler}
      className={`${props.isWinningCell ? (props.winner == "X" ? "bg-green-500" : "bg-red-500") : "bg-zinc-950"} h-28 w-28 border-2 border-white rounded-2xl flex items-center justify-center cursor-pointer select-none`}
    >
      <h1 className={`${props.value === 'X' ? 'text-green-500' : 'text-red-500'} font-bold text-7xl`}>{props.value}</h1>
    </div>
  );
}

export default Square;
