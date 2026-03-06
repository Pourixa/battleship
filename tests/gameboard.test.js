import { GameBoard } from "../scripts/gameboard";
import { Ship } from "../scripts/ship";

a = new Ship(3)
g = new GameBoard()

test.skip('should place the ship', () => {
    g.placeShip(a,[0,0],[0,1],[0,2])
    let testBoard = new GameBoard()
    testBoard.gameBoard[0][0] = a;
    testBoard.gameBoard[0][1] = a;
    testBoard.gameBoard[0][2] = a;
    expect(g.gameBoard.join(",")).toBe(testBoard.gameBoard.join(","))
});
