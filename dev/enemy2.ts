class Enemy2 {
        
    enemy2 : HTMLElement

    x : number
    y : number

    constructor() {
        this.createEnemy2()

        setInterval(() => this.jump(), 8000);
    }

    public createEnemy2() {
        console.log("Enemy2 was created!")

        let game = document.getElementsByTagName("game")[0]
        this.enemy2 = document.createElement("enemy2")
        game.appendChild(this.enemy2)

        this.x = 800 - this.enemy2.clientWidth
        this.y = 780 - this.enemy2.clientHeight

        this.enemy2.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getRectangle() {
        return this.enemy2.getBoundingClientRect()
    }

    public jump() {
        console.log("jump")

        let jumpHeight = 400

        this.enemy2.style.transitionDuration = '1s'
        this.enemy2.style.transitionTimingFunction = 'ease-out'
        this.enemy2.style.transform = `translate(${this.x}px, ${this.y-jumpHeight}px)`

        setTimeout(() => {
            this.enemy2.style.transitionTimingFunction = 'ease-in'
            this.enemy2.style.transform = `translate(${this.x}px, ${this.y}px)`
        }, 1000)
    }
} 

