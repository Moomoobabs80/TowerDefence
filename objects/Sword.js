export class Sword extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, c = 0x012169) {
    super(scene, x, y, 64, 64, c)
    this.scene = scene
    this.damage = 50
    this.setScale(0.5)
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.collideWorldBounds = true
    //this.setOrigin(0.5)
    //this.range = new
  
}
  preUpdate(t, d) {
    
  }
}