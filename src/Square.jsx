import { useState } from "react";
import ODuck from "./tic-tac-O.png";
import XDuck from "./tic-tac-X.png";

export default function Square({ value, onClick }) {
  function getBg() {
    if (value == "O") return ODuck;
    if (value == "X") return XDuck;
    return "";
  }

  return (
    <div
      className="square"
      onClick={onClick}
      style={{ backgroundImage: `url(${getBg()})` }}
    ></div>
  );
}
