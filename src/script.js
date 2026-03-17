import { GameBoard } from "../scripts/gameboard";
import { RealPlayer, PCPlayer } from "../scripts/player";
import { Ship } from "../scripts/ship";
import "./style.css";

function pvePage() {
  //   <button>START</button>

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

      const player = document.createElement("div");
      player.className = "playerBoard";
      for (let i = 0; i < 100; i++) {
        const div = document.createElement("div");
        div.class = i;
        player.append(div);
      }
      const radar = document.createElement("div");
      radar.className = "radarBoard";
      for (let i = 0; i < 100; i++) {
        const div = document.createElement("div");
        div.class = i;
        radar.append(div);
      }
      boardsDiv.append(player, radar);
      return boardsDiv;
    })(),
  );
  //ships
  PVEDIV.appendChild(
    (() => {
      const ships = document.createElement("div");
      ships.className = "ships";
      ships.appendChild(
        (() => {
          const el = document.createElement("h3");
          el.textContent = "SHIPS";
          return el;
        })(),
      );

      const CARRIER = document.createElement("div");
      CARRIER.appendChild(
        (() => {
          const head = document.createElement("h4");
          head.textContent = "CARRIER";
          return head;
        })(),
      );
      CARRIER.appendChild(
        (() => {
          const fdiv = document.createElement("div");
          for (let i = 0; i <= 4; i++) {
            fdiv.appendChild(document.createElement("div"));
          }
          return fdiv;
        })(),
      );
      CARRIER.className = "carrier";

      const BATTLESHIP = document.createElement("div");
      BATTLESHIP.appendChild(
        (() => {
          const head = document.createElement("h4");
          head.textContent = "BATTLESHIP";
          return head;
        })(),
      );
      BATTLESHIP.appendChild(
        (() => {
          const fdiv = document.createElement("div");
          for (let i = 0; i <= 3; i++) {
            fdiv.appendChild(document.createElement("div"));
          }
          return fdiv;
        })(),
      );
      BATTLESHIP.className = "battleship";

      const CRUISER = document.createElement("div");
      CRUISER.appendChild(
        (() => {
          const head = document.createElement("h4");
          head.textContent = "CRUISER";
          return head;
        })(),
      );
      CRUISER.appendChild(
        (() => {
          const fdiv = document.createElement("div");
          for (let i = 0; i <= 2; i++) {
            fdiv.appendChild(document.createElement("div"));
          }
          return fdiv;
        })(),
      );
      CRUISER.className = "cruiser";

      const SUBMARINE = document.createElement("div");
      SUBMARINE.appendChild(
        (() => {
          const head = document.createElement("h4");
          head.textContent = "SUBMARINE";
          return head;
        })(),
      );
      SUBMARINE.appendChild(
        (() => {
          const fdiv = document.createElement("div");
          for (let i = 0; i <= 2; i++) {
            fdiv.appendChild(document.createElement("div"));
          }
          return fdiv;
        })(),
      );
      SUBMARINE.className = "submarine";

      const DESTROYER = document.createElement("div");
      DESTROYER.appendChild(
        (() => {
          const head = document.createElement("h4");
          head.textContent = "DESTROYER";
          return head;
        })(),
      );
      DESTROYER.appendChild(
        (() => {
          const fdiv = document.createElement("div");
          for (let i = 0; i <= 1; i++) {
            fdiv.appendChild(document.createElement("div"));
          }
          return fdiv;
        })(),
      );
      DESTROYER.className = "destroyer";
      ships.append(CARRIER, BATTLESHIP, CRUISER, SUBMARINE, DESTROYER);
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
