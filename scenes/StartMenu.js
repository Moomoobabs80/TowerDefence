export class StartMenu extends Phaser.Scene {
  constructor() {
    super({ key: "start-menu", active: true });
  }

  preload() {
    console.log("loading StartMenu");
  }

  create() {
    this.welcome = this.add.text(150, 150, "Welcome to My Game!");
  }

  update() {
    //yes
  }
}
