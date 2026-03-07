class Ship {
  constructor(len) {
    this.length = len;
    this.sunk = false;
    this.numberOfHits = 0;
  }
  hit() {
    this.numberOfHits++;
    if (this.length <= this.numberOfHits) this.sunk = true;
  }
  isSunk() {
    return this.sunk;
  }
}

export { Ship };
