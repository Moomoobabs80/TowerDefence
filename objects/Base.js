export class Base extends Phaser.GameObjects.Rectangle{
    constructor(scene, x, y, c = 0xA9A8A5) {
    super(scene, x, y, 64, 64, c)
    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.collideWorldBounds = true
    this.setOrigin(0.5)
    this.position = { x, y }
  }
  preUpdate(t,d){
    
  }
}