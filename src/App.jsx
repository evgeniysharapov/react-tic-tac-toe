import "./styles.css";
import Board from "./Board";
import Players from "./Players";

export default function App() {
  return (
    <div className="App">
      <h1>Tic Tac Duck</h1>
      <Players />
      <Board />
    </div>
  );
}
