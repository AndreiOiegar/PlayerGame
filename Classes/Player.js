class Player {
    constructor() {
    this.gameContainer;
    this.div = Player.display();
    this.move();
    }
  
    // logica de miscare
    move() {
      console.log('miscare', this)
      document.addEventListener('keyup', (event) => {
        console.log(this)
        switch(event.keyCode){
            case 40 : //arrow down
            const oldTop = parseInt(this.div.style.top);
            this.div.style.top = `${oldTop + 20}px`;
            console.log('arrow down', this.div.style.top);
            break

            case 39 : //arrow right
            const oldLeft = parseInt(this.div.style.left);
            this.div.style.left = `${oldLeft + 20}px`;
            console.log("arrow right ", this.div.style.left) 
            break

            case 38 : //arrow up
            const oldBottom = parseInt(this.div.style.top);
            this.div.style.top = `${oldBottom - 20}px`;
            console.log("arrow up ", this.div.style.top) 
            break

            case 37 : //arrow left
            const oldRight = parseInt(this.div.style.left);
            this.div.style.left = `${oldRight - 20}px`;
            console.log("arrow right ", this.div.style.left) 
            break

        }
        this.playerIsOutsideOfContainer();
      })
    }
  
    // afisarea div-ului
    static display() {
        const gameContainer = document.querySelector(".map");
        const div = document.createElement('div');
        const { style } = div;
        style.width = "20px";
        style.height = "20px";
        style.backgroundColor = "yellow";
        style.position = "absolute";
        style.top = "20px"
        style.left = "20px"
        style.borderRadius = "50%";
    
        gameContainer.appendChild(div);
    
        return div;
      }

    playerIsOutsideOfContainer(){
        const outsideHeight = parseInt(this.div.style.top);
        const outsideWidth = parseInt(this.div.style.left);

        if(outsideHeight === 0 || outsideHeight === 600 || outsideWidth === 0 || outsideWidth === 600){
            alert("Game Over! Play inside the Map")
            location.reload();
        }
    }
  }