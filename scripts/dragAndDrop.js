import { Elements } from "./elements";
class dragNdrop {
  currLoc = [null, null];
  distance = [null, null];
  nBox = null;
  shipSize = null;
  siblings = null;
  currShip = null;
  flag = null;
  shipsTab = document.querySelector(".ships").cloneNode();

  // you can give a class to the divs that your drop unto

  static makeElDragAble(el) {
    el.addEventListener("dragstart", (e) => {
      const obj = e.target.getBoundingClientRect();
      const boxWidth = e.target.firstChild.getBoundingClientRect().width;
      dragNdrop.shipSize = e.target.childElementCount;
      dragNdrop.currShip = e.target;
      dragNdrop.currLoc = [obj.x, obj.y];
      const cX = e.clientX;
      const cY = e.clientY;

      dragNdrop.distance = [
        cX - dragNdrop.currLoc[0],
        cY - dragNdrop.currLoc[1],
      ];
      let boxDistance = cX - dragNdrop.currLoc[0] - boxWidth;
      dragNdrop.nBox = 0;
      while (boxDistance > 0) {
        dragNdrop.nBox++;
        boxDistance -= boxWidth;
      }
    });

    el.className = "draggable";
    el.draggable = true;
    return el;
  }

  static makeRadDropable(radar) {
    radar.addEventListener("dragover", (e) => {
      e.preventDefault();
      dragNdrop.showDropLoc(e.target);
    });
    radar.addEventListener("dragleave", (e) => {
      e.preventDefault();
      dragNdrop.unShowDropLoc(e.target);
    });
    radar.addEventListener("drop", (e) => {
      e.preventDefault();
      dragNdrop.putInPlace(e.target);
      dragNdrop.curr = null;
    });
    return radar;
  }

  static showDropLoc(e) {
    const orig = e;
    const y = Math.floor(e.getBoundingClientRect().y);
    dragNdrop.flag = true;
    dragNdrop.siblings = [];
    try {
      for (let i = 0; i <= dragNdrop.nBox; i++) {
        dragNdrop.siblings.push(e);
        e = e.previousSibling;
      }
      e = orig;
      for (let i = dragNdrop.nBox; i < dragNdrop.shipSize - 1; i++) {
        e = e.nextSibling;
        dragNdrop.siblings.push(e);
      }

      let i = 0;
      while (i < dragNdrop.siblings.length && dragNdrop.flag) {
        if (
          y != Math.floor(dragNdrop.siblings[i].getBoundingClientRect().y) ||
          dragNdrop.siblings[i].classList.length >= 1
        )
          dragNdrop.flag = !dragNdrop.flag;
        i++;
      }
    } catch (typeError) {
      dragNdrop.flag = !dragNdrop.flag;
    }
    if (dragNdrop.flag) {
      dragNdrop.siblings.forEach((el) => {
        el.style.backgroundColor = "#344f1f";
      });
    }
  }

  static unShowDropLoc(e) {
    dragNdrop.flag = true;
    try {
      let i = 0;
      while (i < dragNdrop.siblings.length && dragNdrop.flag) {
        if (dragNdrop.siblings[i].classList.length >= 1)
          dragNdrop.flag = !dragNdrop.flag;
        i++;
      }
    } catch (typeError) {
      dragNdrop.flag = !dragNdrop.flag;
    }

    if (dragNdrop.flag) {
      dragNdrop.siblings.forEach((el) => {
        el.style.backgroundColor = "aquamarine";
      });
    }
  }

  static putInPlace(el) {
    if (dragNdrop.flag) {
      dragNdrop.siblings.forEach((el) => {
        el.className = dragNdrop.currShip.previousElementSibling.textContent;
      });

      const parent = dragNdrop.currShip.parentElement.parentElement;
      dragNdrop.currShip.parentElement.remove();
      if (parent.childElementCount <= 1) {
        const resetButt = document.createElement("button");
        resetButt.textContent = "RESET";
        resetButt.className = "reset";
        resetButt.addEventListener("click", (e) => {
          const playerBoard = document.querySelector(".playerBoard");
          const childList = playerBoard.childNodes;
          for (let i = 0; i < 100; i++) {
            childList[i].style.backgroundColor = "aquamarine";
            childList[i].className = "";
          }
          resetButt.replaceWith(Elements.shipsTab(dragNdrop.makeElDragAble));
        });
        parent.replaceWith(resetButt);
      }
    }
  }
}

export { dragNdrop };
