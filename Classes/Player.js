class Player {
  constructor() {
    this.div = Player.display();
    this.move();
  }


  move() {
    document.addEventListener('keyup', (event) => {
      const gameContainer = document.querySelector(".map");
      const key = event.key;
      const left = this.div.offsetLeft;
      const top = this.div.offsetTop;
      const step = 10;

      switch (key) {
        case "ArrowUp":
          event.preventDefault();
          if (this.div.getBoundingClientRect().top - step < gameContainer.getBoundingClientRect().top) {
            return;
          }

          this.div.style.top = top - step + "px";

          break;

        case "ArrowDown":
          event.preventDefault();
          if (this.div.getBoundingClientRect().top + step > 400) {
            return;
          }

          this.div.style.top = top + step + "px";

          break;

        case "ArrowLeft":
          event.preventDefault();
          if (this.div.getBoundingClientRect().left - step < gameContainer.getBoundingClientRect().left) {
            return;
          }
          this.div.style.left = left - step + "px";
          break;

        case "ArrowRight":
          event.preventDefault();
          if (this.div.getBoundingClientRect().left + step > 400) {
            return
          }
          this.div.style.left = left + step + "px";

          break;
      }
    })
  }


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
}