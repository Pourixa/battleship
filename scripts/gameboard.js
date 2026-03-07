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
  placeShip(ship, ...cords) {
    cords.forEach((value) => {
      this.gameBoard[value[0]][value[1]] = ship;
    });
    this.ships.push(ship);
  }
  receiveAttack(cord) {
    const hitLoc = this.gameBoard[cord[0]][cord[1]];
    if (hitLoc === 0) this.attacks.push(cord);
    else {
      hitLoc.hit();
      if (hitLoc.isSunk()) this.sunkShips.push(hitLoc);
    }
  }
  isGameOver() {
    if (this.sunkShips.length === this.ships.length) return true;
    return false;
  }
}

export { GameBoard };
