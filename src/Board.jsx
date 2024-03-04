import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows=3, ncols=3, chanceLightStartsOn=50 }) {
  const [board, setBoard] = useState(createBoard(nrows, ncols, chanceLightStartsOn));

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard(nrows=3, ncols=3, chanceLightStartsOn=50) {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for (let i=0; i<nrows; i++) {
      let newRow = [];
      for (let i=0; i<ncols; i++) {
        if (Math.random() * 100 > chanceLightStartsOn) {
          newRow.push(true);
        }
        else {
          newRow.push(false);
        }
        }
        initialBoard.push(newRow);
        }
    return initialBoard;
    }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    let containsFalse = board.some(row => row.some(node => node === false));

    return !containsFalse;
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

    // TODO: Make a (deep) copy of the oldBoard
    const boardCopy = oldBoard.map(column => column.slice());
    // TODO: in the copy, flip this cell and the cells around it

    flipCell(y, x, boardCopy);
    flipCell(y+1, x, boardCopy);
    flipCell(y-1, x, boardCopy);
    flipCell(y, x+1, boardCopy);
    flipCell(y, x-1, boardCopy);

    console.log(boardCopy);

    // TODO: return the copy
    return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  if (hasWon()) {
    return (
      <h1>You win!</h1>
    )
  }
  else {
    return (
      <table>
        <tbody>
          {board.map((row, y) => (
            <tr key={y}>
              {row.map((cell, x) => (
                <Cell
                  key={`${y}-${x}`}
                  isLit={cell}
                  flipCellsAroundMe={() => flipCellsAround(`${y}-${x}`)}
                  />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
    }

  // TODO

  // make table board

  // TODO
}

export default Board;