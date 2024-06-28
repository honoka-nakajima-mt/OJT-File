import Square from "./Square";

type Props = {
    xIsNext: boolean;
    squares: string[];
    onPlay: (nextSquares: string[]) => void;
}

export default function Board({ xIsNext, squares, onPlay }:Props) {
    function handleClick(i: number) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares: string[] = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  
    return (
      <>
        <div className="text-6xl text-black-600 font-serif mt-7 ml-7 underline">{'Tic-Tac-Toe'}</div>
        <div className="text-3xl mt-20 mb-6 font-serif">{status}</div>
        <div className="after:clear-both after:content-[''] after:table">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} color="gradient-to-t from-pink-200 to-blue-200" />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} color="gradient-to-t from-pink-200 to-blue-200" />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} color="gradient-to-t from-pink-200 to-blue-200" />
        </div>
        <div className="after:clear-both after:content-[''] after:table">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} color="gradient-to-t from-blue-200 to-pink-200" />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} color="gradient-to-t from-blue-200 to-pink-200" />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} color="gradient-to-t from-blue-200 to-pink-200" />
        </div>
        <div className="after:clear-both after:content-[''] after:table">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} color="gradient-to-t from-pink-200 to-blue-200" />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} color="gradient-to-t from-pink-200 to-blue-200" />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} color="gradient-to-t from-pink-200 to-blue-200" />
        </div>
      </>
    );
  }

  function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }