class Player {
        
    player : HTMLElement

    x : number
    y : number

    leftSpeed : number = 0
    rightSpeed : number = 0

    constructor() {
        this.createPlayer()
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
    }

    public createPlayer() {
        console.log("Player was created!")

        let game = document.getElementsByTagName("game")[0]
        this.player = document.createElement("player")
        game.appendChild(this.player)

        this.x = 160 - this.player.clientWidth
        this.y = 780 - this.player.clientHeight

        this.player.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    
    onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode) {
            case 37:
            case 65:
                this.leftSpeed = 5
                this.rightSpeed = 0
                break
            case 39:
            case 68:
                this.leftSpeed = 0
                this.rightSpeed = 5
                break
        }
    }

    onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode) {
            case 37:
            case 65:
                this.leftSpeed = 0
                this.rightSpeed = 0
                break
            case 39:
            case 68:
                this.leftSpeed = 0
                this.rightSpeed = 0
                break
        }
    } 

    getFutureRectangle(){
        let rect = this.player.getBoundingClientRect()
        rect.x += this.rightSpeed - this.leftSpeed
        return rect
     }

    public update() {
        let newX = this.x - this.leftSpeed + this.rightSpeed

        if (newX >= 0 && newX <= 1440 - this.player.clientWidth) {
            this.x = newX

            this.player.style.transform = `translate(${newX}px, ${this.y}px)`
        }
    }
} 

