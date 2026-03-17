import { GameBoard } from "../scripts/gameboard";
import { Ship } from "../scripts/ship";

a = new Ship(3);
g = new GameBoard();
g.placeShip(a, [0, 0], [0, 1], [0, 2]);

test.skip("should place the ship", () => {
  let testBoard = new GameBoard();
  testBoard.gameBoard[0][0] = a;
  testBoard.gameBoard[0][1] = a;
  testBoard.gameBoard[0][2] = a;
  expect(g.gameBoard.join(",")).toBe(testBoard.gameBoard.join(","));
});

<<<<<<< HEAD
=======
test.skip("hiting empty Space", () => {
  g.receiveAttack([1, 1]);
  expect(g.attacks[0][0]).toBe(1);
});

test.skip("hiting ship", () => {
  g.receiveAttack([0, 1]);
  expect(a.numberOfHits).toBe(1);
});

test.skip("keep track of sunk ships", () => {
  g.receiveAttack([0, 1]);
  g.receiveAttack([0, 0]);
  g.receiveAttack([0, 2]);
  expect(g.sunkShips[0].numberOfHits).toBe(a.numberOfHits);
});

test.skip("report if all is sunk", () => {
  g.receiveAttack([0, 1]);
  g.receiveAttack([0, 0]);
  g.receiveAttack([0, 2]);
  expect(g.isGameOver()).toBe(true);
});


>>>>>>> 0326fba2f54dbeb834af14f098d85d6ad0691d80
