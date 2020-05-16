import mainscene from './mainscene.js'

const config = {
    width: 1440,
    height: 640,
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: [mainscene]
};

new Phaser.Game(config);