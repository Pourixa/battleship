class GameBoard {
  constructor() {
    this.gameBoard = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.attacks = [];
    this.sunkShips = [];
    this.ships = [];
  }
  placeShip(ship, cords) {
    cords.forEach((value) => {
      this.gameBoard[value[0]][value[1]] = ship;
    });
    this.ships.push(ship);
  }
  receiveAttack(cord) {
    if (this.gameBoard[cord[0]][cord[1]] === -1) return false;

    if (this.gameBoard[cord[0]][cord[1]] === 0) {
      this.gameBoard[cord[0]][cord[1]] = -1;
      return false;
    } else {
      this.gameBoard[cord[0]][cord[1]].hit();
      if (this.gameBoard[cord[0]][cord[1]].isSunk())
        this.sunkShips.push(this.gameBoard[cord[0]][cord[1]]);
      this.gameBoard[cord[0]][cord[1]] = -1;
      return true;
    }
  }
  isGameOver() {
    if (this.sunkShips.length === this.ships.length) return true;
    return false;
  }
}

export { GameBoard };
