class Elements {
  static mapGen(className) {
    const map = document.createElement("div");
    map.className = className;
    for (let i = 0; i < 100; i++) {
      const div = document.createElement("div");
      div.draggable = false;
      div.class = i;
      map.append(div);
    }
    return map;
  }
  static shipsTab(draggableFunction) {
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
        let fdiv = document.createElement("div");
        for (let i = 0; i <= 4; i++) {
          fdiv.appendChild(document.createElement("div"));
        }
        fdiv = draggableFunction(fdiv);
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
        let fdiv = document.createElement("div");
        for (let i = 0; i <= 3; i++) {
          fdiv.appendChild(document.createElement("div"));
        }
        fdiv = draggableFunction(fdiv);
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
        let fdiv = document.createElement("div");
        for (let i = 0; i <= 2; i++) {
          fdiv.appendChild(document.createElement("div"));
        }
        fdiv = draggableFunction(fdiv);
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
        let fdiv = document.createElement("div");
        for (let i = 0; i <= 2; i++) {
          fdiv.appendChild(document.createElement("div"));
        }
        fdiv = draggableFunction(fdiv);
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
        let fdiv = document.createElement("div");
        for (let i = 0; i <= 1; i++) {
          fdiv.appendChild(document.createElement("div"));
        }
        fdiv = draggableFunction(fdiv);
        return fdiv;
      })(),
    );
    DESTROYER.className = "destroyer";
    ships.append(CARRIER, BATTLESHIP, CRUISER, SUBMARINE, DESTROYER);
    return ships;
  }
  static gameplay (document,)
  {

  }
}

export { Elements };
