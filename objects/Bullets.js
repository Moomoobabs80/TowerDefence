export class Bullets extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, direction) {
    super(scene, x, y,10,5,0x848482)
    this.scene = scene
    this.damage = 50
    this.direction = direction
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.collideWorldBounds = true
  }
  preUpdate(t,d){
    this.scene.physics.moveToObject(this,this.direction,1000,null)
  }
}