import { AIPlayer } from "./player";
import { RealPlayer } from "./player";
import { Ship } from "./ship";
import { GameBoard } from "./gameboard";

const SHIPS = {
  CARRIER: 5,
  BATTLESHIP: 4,
  CRUISER: 3,
  SUBMARINE: 3,
  DESTROYER: 2,
};
function randomMapArrayGen() {
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

function PVEgameplay(doc, playerBoard) {
  const reset = doc.querySelector(".reset");
  reset.nextElementSibling.remove();
  const hits = doc.createElement("div");
  hits.className = "hits";
  let head = doc.createElement("h1");
  head.textContent = "HITS";
  hits.appendChild(head);
  const playerHits = doc.createElement("div");
  head = doc.createElement("h1");
  head.textContent = "PLAYER";
  const pList = doc.createElement("ol");
  playerHits.appendChild(head);
  playerHits.appendChild(pList);
  const AIhits = doc.createElement("div");
  head = doc.createElement("h1");
  head.textContent = "BOT";
  const AList = doc.createElement("ol");
  AIhits.appendChild(head);
  AIhits.appendChild(AList);
  hits.append(playerHits, AIhits);
  reset.replaceWith(hits);
  const AIMap = randomMapArrayGen();

  const radar = doc.querySelector(".radarBoard");
  const boxes = radar.children;
  let i = 0;
  for (const box of boxes) {
    box.id = i;
    box.className = "hoverable";
    i++;
  }
  radar.addEventListener("click", (e) => {
    const ind = parseInt(e.target.id);
    if (isNaN(ind)) return;
    const row = Math.floor(ind / 10);
    const col = ind % 10;
    if (AIMap.receiveAttack([row, col])) {
      e.target.style.backgroundColor = "#344f1f";
      e.target.className = "hit";
      pList.appendChild(
        (() => {
          const hit = doc.createElement("li");
          hit.textContent = "HIT";
          return hit;
        })(),
      );
    } else if (e.target.className != "hit" && e.target.className != "miss") {
      e.target.style.backgroundColor = "red";

      pList.appendChild(
        (() => {
          const hit = doc.createElement("li");
          hit.textContent = "MISS";
          return hit;
        })(),
      );
      e.target.className = "miss";
    }
  });
}

export { PVEgameplay };
