import { useState } from "react";
import Square from "./Square";
import calculateWinner from "./calculateWinner";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [winner, setWinner] = useState();

  function handleClick(index) {
    const newSquares = squares.slice();
    newSquares[index] = currentTurn;
    setSquares(newSquares);
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setWinner(calculateWinner(newSquares));
  }

  function renderSquare(index) {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  }

  return (
    <div className="board">
      <div style={{ marginBottom: "10px" }}> Current Turn: {currentTurn} </div>
      <div style={{ marginBottom: "10px" }}> Winner: {winner} </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
