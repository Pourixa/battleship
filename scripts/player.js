import { GameBoard } from "./gameboard";

class RealPlayer {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
  }
}
class AIPlayer {
  constructor() {
    this.gameBoard = new GameBoard();
  } 
}
export {RealPlayer,AIPlayer}