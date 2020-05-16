import snake from './snake.js'


export default class mainscene extends Phaser.Scene {
    constructor() {
        super('mainscene')
    }
    create() {
        this.snake = new snake(this)
    }

    update(time) {
        this.snake.update(time)
    }
}