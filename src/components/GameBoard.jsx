

export default function GameBoard({onSelectSquare, board }) {


    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex ) {
    //     setGameBoard((prevGameBoard) => {
    //         //creating a deep copy of the gameboard
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         //Update the selected square
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }


  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol != null}>
                  {playerSymbol}
                  </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
