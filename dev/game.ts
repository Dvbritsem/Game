class Game {
    
    enemy2:Enemy2
    player:Player
    checkpoint:Checkpoint

    constructor() {
        console.log("Game was created!")
        this.enemy2 = new Enemy2()
        this.player = new Player()
        this.checkpoint = new Checkpoint()
        this.gameloop()
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= (b.right - 5) &&
                b.left <= (a.right - 5) &&
                a.top <= b.bottom &&
                b.top <= a.bottom)
    }

    gameloop() {
        //check collission between player and enemy//
        if (this.checkCollision(this.player.getFutureRectangle(), this.enemy2.getRectangle())) {
            console.log("botsing")

            alert("Game over");
            window.location.reload();
        }
        else {
            this.player.update()
        }

        //check collission between player and checkpoint//
        if (this.checkCollision(this.player.getFutureRectangle(), this.checkpoint.getRectangle())) {
            console.log("Winst")

            alert("Gewonnen");
            location.reload();
        }

        requestAnimationFrame(() => this.gameloop())
    }
} 

window.addEventListener("load", () => new Game())
