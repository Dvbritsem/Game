"use strict";
var Player = (function () {
    function Player() {
        var _this = this;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.createPlayer();
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Player.prototype.createPlayer = function () {
        console.log("Player was created!");
        var game = document.getElementsByTagName("game")[0];
        this.player = document.createElement("player");
        game.appendChild(this.player);
        this.x = 160 - this.player.clientWidth;
        this.y = 780 - this.player.clientHeight;
        this.player.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 37:
            case 65:
                this.leftSpeed = 5;
                this.rightSpeed = 0;
                break;
            case 39:
            case 68:
                this.leftSpeed = 0;
                this.rightSpeed = 5;
                break;
        }
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case 37:
            case 65:
                this.leftSpeed = 0;
                this.rightSpeed = 0;
                break;
            case 39:
            case 68:
                this.leftSpeed = 0;
                this.rightSpeed = 0;
                break;
        }
    };
    Player.prototype.getFutureRectangle = function () {
        var rect = this.player.getBoundingClientRect();
        rect.x += this.rightSpeed - this.leftSpeed;
        return rect;
    };
    Player.prototype.update = function () {
        var newX = this.x - this.leftSpeed + this.rightSpeed;
        if (newX >= 0 && newX <= 1440 - this.player.clientWidth) {
            this.x = newX;
            this.player.style.transform = "translate(" + newX + "px, " + this.y + "px)";
        }
    };
    return Player;
}());
var Checkpoint = (function () {
    function Checkpoint() {
        this.createCheckpoint();
    }
    Checkpoint.prototype.createCheckpoint = function () {
        console.log("Checkpoint was created!");
        var game = document.getElementsByTagName("game")[0];
        this.checkpoint = document.createElement("checkpoint");
        game.appendChild(this.checkpoint);
        this.x = 1400 - this.checkpoint.clientWidth;
        this.y = 780 - this.checkpoint.clientHeight;
        this.checkpoint.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Checkpoint.prototype.getRectangle = function () {
        return this.checkpoint.getBoundingClientRect();
    };
    return Checkpoint;
}());
var Enemy2 = (function () {
    function Enemy2() {
        var _this = this;
        this.createEnemy2();
        setInterval(function () { return _this.jump(); }, 8000);
    }
    Enemy2.prototype.createEnemy2 = function () {
        console.log("Enemy2 was created!");
        var game = document.getElementsByTagName("game")[0];
        this.enemy2 = document.createElement("enemy2");
        game.appendChild(this.enemy2);
        this.x = 800 - this.enemy2.clientWidth;
        this.y = 780 - this.enemy2.clientHeight;
        this.enemy2.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Enemy2.prototype.getRectangle = function () {
        return this.enemy2.getBoundingClientRect();
    };
    Enemy2.prototype.jump = function () {
        var _this = this;
        console.log("jump");
        var jumpHeight = 400;
        this.enemy2.style.transitionDuration = '1s';
        this.enemy2.style.transitionTimingFunction = 'ease-out';
        this.enemy2.style.transform = "translate(" + this.x + "px, " + (this.y - jumpHeight) + "px)";
        setTimeout(function () {
            _this.enemy2.style.transitionTimingFunction = 'ease-in';
            _this.enemy2.style.transform = "translate(" + _this.x + "px, " + _this.y + "px)";
        }, 1000);
    };
    return Enemy2;
}());
var Game = (function () {
    function Game() {
        console.log("Game was created!");
        this.enemy2 = new Enemy2();
        this.player = new Player();
        this.checkpoint = new Checkpoint();
        this.gameloop();
    }
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= (b.right - 5) &&
            b.left <= (a.right - 5) &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.gameloop = function () {
        var _this = this;
        if (this.checkCollision(this.player.getFutureRectangle(), this.enemy2.getRectangle())) {
            console.log("botsing");
            alert("Game over");
            window.location.reload();
        }
        else {
            this.player.update();
        }
        if (this.checkCollision(this.player.getFutureRectangle(), this.checkpoint.getRectangle())) {
            console.log("Winst");
            alert("Gewonnen");
            location.reload();
        }
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map