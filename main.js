import { StartMenu } from './scenes/StartMenu.js';
import { MainLevel } from './scenes/MainLevel.js';
import { GameOver } from './scenes/GameOver.js';

let config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 512,
    height: 512,
    input: {
        gamepad: true
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            fps: 60,
            gravity: { y: 0 }
        }
    },
    scene: [ 
      StartMenu, GameOver, MainLevel
    ]
};

let game = new Phaser.Game(config);