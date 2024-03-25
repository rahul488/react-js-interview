import { useState } from "react";
import "./Board.css";
import Square from "./Square";
const Board = () => {
  const [visited, setVisited] = useState(Array(9).fill(null));
  const [isXplaying, setXplaying] = useState(true);
  const [winner, setWinner] = useState(null);

  const handlePlay = (index) => {
    if (visited[index] || winner) {
      return;
    }
    const tempArr = visited.slice();
    if (isXplaying) {
      tempArr[index] = "X";
      setXplaying(false);
    } else {
      tempArr[index] = "O";
      setXplaying(true);
    }
    setVisited(() => {
      if (CalculateWinner(tempArr)) {
        setWinner({
          player: isXplaying ? "X" : "O",
          win: true,
        });
      }
      return tempArr;
    });
  };
  return (
    <>
      {winner ? (
        <h2 className="text-center">{winner.player} has won the match</h2>
      ) : !winner && !visited.includes(null) ? (
        <h2 className="text-center">Match has tied</h2>
      ) : null}
      <div className="container">
        <Square value={visited[0]} onPlay={() => handlePlay(0)} />
        <Square value={visited[1]} onPlay={() => handlePlay(1)} />
        <Square value={visited[2]} onPlay={() => handlePlay(2)} />

        <Square value={visited[3]} onPlay={() => handlePlay(3)} />
        <Square value={visited[4]} onPlay={() => handlePlay(4)} />
        <Square value={visited[5]} onPlay={() => handlePlay(5)} />

        <Square value={visited[6]} onPlay={() => handlePlay(6)} />
        <Square value={visited[7]} onPlay={() => handlePlay(7)} />
        <Square value={visited[8]} onPlay={() => handlePlay(8)} />
      </div>
    </>
  );
};
export default Board;

const CalculateWinner = (visited) => {
  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winner.length; i++) {
    const [a, b, c] = winner[i];
    if (visited[a] && visited[a] === visited[b] && visited[a] === visited[c]) {
      return true;
    }
  }
  return false;
};
