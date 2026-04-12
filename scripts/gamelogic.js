import { AIPlayer } from "./player";
import { RealPlayer } from "./player";

import { GameBoard } from "./gameboard";

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

  const Hplayer = new RealPlayer(playerBoard);
  const bot = new AIPlayer();

  const radar = doc.querySelector(".radarBoard");
  const boxes = radar.children;
  let i = 0;
  for (const box of boxes) {
    box.id = i;
    box.className = "hoverable";
    i++;
  }
  radar.addEventListener("click", (e) => {
    Hplayer.playerHit(e, bot.gameBoard, doc, pList);
    //botHit()
  });
}

export { PVEgameplay };
