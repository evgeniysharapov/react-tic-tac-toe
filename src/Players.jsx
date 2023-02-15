import ODuck from "./tic-tac-O.png";
import XDuck from "./tic-tac-X.png";

export default function Players() {
  return (
    <div className="players">
      <img src={ODuck} alt="O" className="square player-square" />
      <img src={XDuck} alt="X" className="square player-square" />
    </div>
  );
}
