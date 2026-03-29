import { GameBoard } from "../scripts/gameboard";
import { RealPlayer, PCPlayer } from "../scripts/player";
import { Ship } from "../scripts/ship";
import { dragNdrop } from "../scripts/dragAndDrop";
import { Elements } from "../scripts/elements";
import "./style.css";

// CARRIER: 5,
// BATTLESHIP: 4,
// CRUISER: 3,
// SUBMARINE: 3,
// DESTROYER: 2

function pvePage() {
  const PVEDIV = document.querySelector(".pve");
  const HOMEDIV = document.querySelector(".home");
  const boardArray = new GameBoard();
  PVEDIV.style.display = "grid";
  PVEDIV.appendChild(
    (() => {
      const child = document.createElement("button");
      child.textContent = "HOME";
      child.addEventListener("click", (e) => {
        PVEDIV.innerHTML = "";
        HOMEDIV.style.display = "grid";
      });
      return child;
    })(),
  );

  PVEDIV.appendChild(
    (() => {
      const boardsDiv = document.createElement("div");
      boardsDiv.className = "boards";

      const player = Elements.mapGen("playerBoard");
      const radar = Elements.mapGen("radarBoard");

      boardsDiv.append(dragNdrop.makeRadDropable(player), radar);
      return boardsDiv;
    })(),
  );
  //ships
  PVEDIV.appendChild(
    (() => {
      const ships = Elements.shipsTab(dragNdrop.makeElDragAble);
      return ships;
    })(),
  );
  PVEDIV.appendChild(
    (() => {
      const child = document.createElement("button");
      child.textContent = "START";
      child.addEventListener("click", (e) => {
        function addShip (size,i)
        {
          let coords = [];

          for (let g = 0; g < size; g++) {
            const x = Math.floor((i) / 9);
            const y = (i) % 9;
            coords.push([x, y]);
          }
          return coords;
        }
        if (e.target.previousElementSibling.className == "reset") {
          let i = 0;
          const board = document.querySelector(".playerBoard").childNodes;
          while (i < 100) {
            if (board[i].className == "CARRIER") {
              const coords = addShip(5,i)
              const ship = new Ship("CARRIER", 5);
              boardArray.placeShip(ship, coords);
              i+=5
            } else if (board[i].className == "BATTLESHIP") {
              const coords = addShip(4,i);
              const ship = new Ship("BATTLESHIP", 4);
              boardArray.placeShip(ship, coords);
              i += 4;
            } else if (board[i].className == "CRUISER") {
              const coords = addShip(3,i);
              const ship = new Ship("CRUISER", 3);
              boardArray.placeShip(ship, coords);
              i += 3;
            } else if (board[i].className == "SUBMARINE") {
              const coords = addShip(3,i)
              const ship = new Ship("SUBMARINE", 3);
              boardArray.placeShip(ship, coords);
              i += 3;
            } else if (board[i].className == "DESTROYER") {
              const coords = addShip(2,i)
              const ship = new Ship("DESTROYER", 2);
              boardArray.placeShip(ship, coords);
              i += 2;
            } else i++;
          }
          console.log(boardArray);
        }
      });
      return child;
    })(),
  );
}

(() => {
  const PVEBUTTON = document.querySelector(".home>div>button:first-child");
  const PVPBUTTON = document.querySelector(".home>div>button:last-child");
  const HOME = document.querySelector(".home");
  PVPBUTTON.addEventListener("click", (e) => {
    null;
  });
  PVEBUTTON.addEventListener("click", (e) => {
    HOME.style.display = "none";
    pvePage();
  });
})();
