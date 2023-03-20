export class Enemy extends Phaser.GameObjects.Rectangle {
  pathIndex = 0
  constructor(scene, x, y, c = 0xef0307) {
    super(scene, x, y, 64, 64, c)
    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.setScale(0.5)
    this.body.collideWorldBounds = true
    this.setOrigin(0.5)
    this.timeAlive = 0
    this.speed = 1 / 10000
    this.position = { x, y }
  }
  preUpdate(t, d) {
    this.timeAlive += d * this.speed
    if (this.timeAlive > 1) {
      this.timeAlive = 1
    }
    const point = this.path.getPoint(this.timeAlive)
    this.setPosition(point.x, point.y)
  }
  setPath(p) {
    this.path = p
  }
}