export class SwordRange extends Phaser.GameObjects.Ellipse{
  constructor(scene, x, y){
  super(scene, x, y, 192, 192, 0xCDC7BD, 0.5)
  this.scene = scene
  this.scene.add.existing(this)
  this.scene.physics.add.existing(this)
  this.body.isCircle = true
  }
}