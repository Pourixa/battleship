class dragNdrop {
  static makeElDragAble(el) {
    el.className = "draggable";
    el.draggable = true;
    return el;
  }
  static makeRadDropable(radar) {
    radar.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    radar.addEventListener("drop", (e) => {
      e.preventDefault();
      putInPlace(e.target);
    });
    return radar;
  }
  putInPlace(el) {
    el.getBoundingClientRect();
  }
}

export { dragNdrop };
