class Checkpoint {
    
    checkpoint : HTMLElement

    x : number
    y : number

    constructor() {
        this.createCheckpoint()
    }

    public createCheckpoint() {
        console.log("Checkpoint was created!")

        let game = document.getElementsByTagName("game")[0]
        this.checkpoint = document.createElement("checkpoint")
        game.appendChild(this.checkpoint)

        this.x = 1400 - this.checkpoint.clientWidth
        this.y = 780 - this.checkpoint.clientHeight

        this.checkpoint.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getRectangle() {
        return this.checkpoint.getBoundingClientRect()
    }
} 