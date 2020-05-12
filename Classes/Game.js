class Game{
    constructor(){
        this.gameContainer = this.showMap();
        this.player = new Player;
    }

    showMap(){
    const gameContainer = document.querySelector(".map");
    const {style} = gameContainer;
    style.width = "600px";
    style.height = "600px";
    style.backgroundColor = "#367536";
    style.border = "5px solid black";
    document.body.appendChild(gameContainer);
    return gameContainer;
    }
}

const game = new Game;