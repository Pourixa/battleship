import { GameBoard } from "../scripts/gameboard";
import { RealPlayer, PCPlayer } from "../scripts/player";
import { Ship } from "../scripts/ship";
import "./style.css";
function pvePage() {}

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
