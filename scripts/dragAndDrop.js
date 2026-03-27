class dragNdrop {
  currLoc = [null, null];
  distance = [null, null];
  nBox = null;
  shipSize = null;
  siblings = null;
  currShip = null;

  // you can give a class to the divs that your drop unto

  static makeElDragAble(el) {
    el.addEventListener("dragstart", (e) => {
      this.currShip = e.target.previousElementSibling.textContent;
      const obj = e.target.getBoundingClientRect();
      const boxWidth = e.target.firstChild.getBoundingClientRect().width;
      this.shipSize = e.target.childElementCount;
      this.currShip = e.target;
      this.currLoc = [obj.x, obj.y];
      const cX = e.clientX;
      const cY = e.clientY;

      this.distance = [cX - this.currLoc[0], cY - this.currLoc[1]];
      let boxDistance = cX - this.currLoc[0] - boxWidth;
      this.nBox = 0;
      while (boxDistance > 0) {
        this.nBox++;
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
      this.curr = null;
    });
    return radar;
  }

  static showDropLoc(e) {
    const orig = e;
    const y = Math.floor(e.getBoundingClientRect().y);
    let flag = true;
    this.siblings = [];
    try {
      for (let i = 0; i <= this.nBox; i++) {
        this.siblings.push(e);
        e = e.previousSibling;
      }
      e = orig;
      for (let i = this.nBox; i < this.shipSize - 1; i++) {
        e = e.nextSibling;
        this.siblings.push(e);
      }

      let i = 0;
      while (i < this.siblings.length && flag) {
        if (
          y != Math.floor(this.siblings[i].getBoundingClientRect().y) ||
          this.siblings[i].classList.length >= 1
        )
          flag = !flag;
        i++;
      }
    } catch (typeError) {
      flag = !flag;
    }
    if (flag) {
      this.siblings.forEach((el) => {
        el.style.backgroundColor = "#344f1f";
      });
    }
  }

  static unShowDropLoc(e) {
    let flag = true;
    try {
      let i = 0;
      while (i < this.siblings.length && flag) {
        if (this.siblings[i].classList.length >= 1) flag = !flag;
        i++;
      }
    } catch (typeError) {
      flag = !flag;
    }

    if (flag) {
      this.siblings.forEach((el) => {
        el.style.backgroundColor = "aquamarine";
      });
    }
  }

  static putInPlace(el) {
    this.siblings.forEach((el) => {
      el.className = this.currShip.previousElementSibling.textContent;
    });
    const parent = this.currShip.parentElement.parentElement;
    this.currShip.parentElement.remove();
    if (parent.childElementCount <= 1) {
      parent.remove();
    }
  }
}

export { dragNdrop };
