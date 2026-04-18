import { GameBoard } from "./gameboard";
import { Ship } from "./ship";
const SHIPS = {
  CARRIER: 5,
  BATTLESHIP: 4,
  CRUISER: 3,
  SUBMARINE: 3,
  DESTROYER: 2,
};

class RealPlayer {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.shipsSank = 0;
  }

  playerHit(e, AIMap, doc, list) {
    const ind = parseInt(e.target.id);
    if (isNaN(ind)) return;
    const row = Math.floor(ind / 10);
    const col = ind % 10;
    if (AIMap.receiveAttack([row, col])) {
      e.target.style.backgroundColor = "#344f1f";
      e.target.className = "hit";
      list.appendChild(
        (() => {
          const hit = doc.createElement("li");
          hit.textContent = "HIT";
          return hit;
        })(),
      );
      if (AIMap.sunkShips.length > this.shipsSank) {
        this.shipsSank++;
        list.appendChild(
          (() => {
            const hit = doc.createElement("h3");
            hit.textContent =
              AIMap.sunkShips[this.shipsSank - 1].name +
              " HAS BEEN ELIMINATED!";
            return hit;
          })(),
        );
        if (AIMap.isGameOver()) {
          const hits = doc.querySelector(".hits");
          hits.innerHTML = "";
          hits.appendChild(
            (() => {
              const win = doc.createElement("h1");
              win.textContent = "PLAYER WON!";
              const boards = doc.querySelector(".boards");
              boards.classList.add("over");
              return win;
            })(),
          );
          hits.className = "win";
        }
      }
      return true;
    } else if (e.target.className != "hit" && e.target.className != "miss") {
      e.target.style.backgroundColor = "red";

      list.appendChild(
        (() => {
          const hit = doc.createElement("li");
          hit.textContent = "MISS";
          return hit;
        })(),
      );
      e.target.className = "miss";
      return true;
    } else return false;
  }
}

class AIPlayer {
  constructor() {
    this.gameBoard = this.randomMapArrayGen();
    this.shipsSank = 0;
  }
  randomMapArrayGen() {
    const gameBoard = new GameBoard();
    for (const [key, value] of Object.entries(SHIPS)) {
      let flag = false;
      let coords = null;
      while (!flag) {
        coords = [];
        let valid = true;

        const row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);

        while (col + value > 9) col = Math.floor(Math.random() * 9);

        for (let i = 0; i < value; i++) {
          if (gameBoard.gameBoard[row][col + i] !== 0) {
            valid = false;
            break;
          }
          coords.push([row, col + i]);
        }

        if (valid) flag = true;
      }
      const ship = new Ship(key, value);
      gameBoard.placeShip(ship, coords);
    }
    return gameBoard;
  }
  botHit(player, doc, list) {
    // select a cell and attack
    const childs = doc.querySelector(".playerBoard").childNodes;
    let playerMap = player.gameBoard.gameBoard;
    let row, col;
    let e;
    do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    } while (playerMap[row][col] == -1);
    e = childs[row * 10 + col];
    if (player.gameBoard.receiveAttack([row, col])) {
      e.style.backgroundColor = "#FC6400";
      e.className = "hit";
      list.appendChild(
        (() => {
          const hit = doc.createElement("li");
          hit.textContent = "HIT";
          return hit;
        })(),
      );
      if (player.gameBoard.sunkShips.length > this.shipsSank) {
        this.shipsSank++;
        list.appendChild(
          (() => {
            const hit = doc.createElement("h3");
            hit.textContent =
              player.gameBoard.sunkShips[this.shipsSank - 1].name +
              " HAS BEEN ELIMINATED!";
            return hit;
          })(),
        );
        if (player.gameBoard.isGameOver()) {
          const hits = doc.querySelector(".hits");
          hits.innerHTML = "";
          hits.appendChild(
            (() => {
              const win = doc.createElement("h1");
              win.textContent = "BOT WON!";
              const boards = doc.querySelector(".boards");
              boards.classList.add("over");
              return win;
            })(),
          );
          hits.className = "win";
        }
      }
    } else {
      e.style.backgroundColor = "red";
      list.appendChild(
        (() => {
          const hit = doc.createElement("li");
          hit.textContent = "MISS";
          return hit;
        })(),
      );
      e.className = "miss";
    }
  }
}
export { RealPlayer, AIPlayer };
