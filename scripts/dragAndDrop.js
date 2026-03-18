class dragNdrop {

  currShip = null
  currLoc = [null,null]
  currCell = null
  distance = [null , null];
  shipSizes = {
    "CARRIER":5,
    "BATTLESHIP":4,
    "CRUISER":3,
    "SUBMARINE":3,
    "DESTROYER":2,
  }
  static makeElDragAble(el) {
     el.addEventListener("dragstart",(e) => {
      this.currShip = e.target.previousElementSibling.textContent;
      const obj = e.target.getBoundingClientRect();
     this.currLoc = [obj.x,obj.y];
     const cX = e.target.clientX
     const cY = e.target.clientY

    const eachRow = obj.width

     this.distance = []
    })

    el.className = "draggable";
    el.draggable = true;
    return el;
  }

  static makeRadDropable(radar) {
    radar.addEventListener("dragover", (e) => {
      e.preventDefault();
      dragNdrop.showDropLoc(e.target);
    });
    radar.addEventListener("dragleave" , (e) => {
      e.preventDefault();
      dragNdrop.unShowDropLoc(e.target)
    });
    radar.addEventListener("drop", (e) => {
      e.preventDefault();
      dragNdrop.putInPlace(e.target);
      this.curr = null
    });
    return radar;
  }

  static showDropLoc(e)
  {
    e.style.backgroundColor = "#344f1f"
  }

  static unShowDropLoc(e)
  {
    e.style.backgroundColor = "aquamarine"
  }

  putInPlace(el) {
    el.getBoundingClientRect();
  }

}

export { dragNdrop };
