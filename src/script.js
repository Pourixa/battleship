import { GameBoard } from "../scripts/gameboard";
import { RealPlayer, PCPlayer } from "../scripts/player";
import { Ship } from "../scripts/ship";
import { dragNdrop } from "../scripts/dragAndDrop";
import { Elements } from "../scripts/elements";
import "./style.css";

function pvePage() {
  const PVEDIV = document.querySelector(".pve");
  const HOMEDIV = document.querySelector(".home");
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
        null;
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
