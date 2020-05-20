class Player {
  constructor() {
    this.div = Player.display();
    this.move();
  }

  // logica de miscare
  move() {
    document.addEventListener('keyup', (event) => {
      const oldTop = parseInt(this.div.style.top);
      const oldLeft = parseInt(this.div.style.left);
      const stop = this.playerIsOutsideOfContainer();

      switch (event.keyCode) {

        case 40: //arrow down
          if (stop === false) {
            this.div.style.top = `${oldTop + 20}px`;
            // console.log('arrow down', this.div.style.top);
          }
          break;

        case 39: //arrow right

          if (stop === false) {
            this.div.style.left = `${oldLeft + 20}px`;
            // console.log("arrow right ", this.div.style.left)
          }
          break;

        case 38: //arrow up
          if (stop === false) {
            this.div.style.top = `${oldTop - 20}px`;
            // console.log("arrow up ", this.div.style.top) 
          }
          break;

        case 37: //arrow left
          if (stop === false) {
            this.div.style.left = `${oldLeft - 20}px`;
            // console.log("arrow right ", this.div.style.left)
          }
          break;

      }

    })
  }

  // afisarea div-ului
  static display() {
    const div = document.createElement('div');
    const {
      style
    } = div;
    style.width = "20px";
    style.height = "20px";
    style.backgroundColor = "yellow";
    style.position = "absolute";
    style.top = "30px"
    style.left = "30px"
    style.borderRadius = "50%";

    document.body.appendChild(div);

    return div;
  }

  playerIsOutsideOfContainer() {
    const outsideHeight = parseInt(this.div.style.top);
    const outsideWidth = parseInt(this.div.style.left);

    if (outsideHeight === 10 || outsideHeight === 590 || outsideWidth === 10 || outsideWidth === 590) {
      return true;
    } else {
      return false;
    }
  }
}