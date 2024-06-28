type Props = {
    value: string;
    onSquareClick: () => void;
    color: string;
}

export default function Square({ value, onSquareClick, color }:Props) {
    return (
        <button className={`border-white text-gray-800 border-solid border float-left
        text-5xl font-bold leading-8 h-20 -mr-px -mt-px 
        p-0 text-center w-20 font-serif bg-${color}`}
        onClick={onSquareClick}>
            {value}
        </button>
    );
  }