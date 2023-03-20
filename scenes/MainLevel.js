import { Enemy } from '../objects/Enemy.js'
import { Sword } from '../objects/Sword.js'
import { SwordRange } from '../objects/SwordRange.js'
import { Bullets } from '../objects/Bullets.js'
import { Base } from '../objects/Base.js'
export class MainLevel extends Phaser.Scene {
  constructor() {
    super({ key: "main-level" });
    this.enemies = []
    this.nextEnemy = 5000
  }

  preload() {
    console.log("loading MainLevel");
  }

  create() {
    //Making enemy path
    this.path = new Phaser.Curves.Path(0, 0)
    this.path.lineTo(500, 0)
    this.path.lineTo(500, 128)
    this.path.lineTo(0, 128)
    this.path.lineTo(0, 256)
    this.path.lineTo(500, 256)
    this.path.lineTo(500, 384)
    this.path.lineTo(0, 384)
    this.path.lineTo(0, 512)
    this.path.lineTo(500, 512)
    this.enemy = new Enemy(this, 100, 100)
    this.sword = new Sword(this, 320, 64)
    this.swordRange = new SwordRange(this, 320, 64)
    this.base = new Base(this, 512, 512)
    this.enemies.push(this.enemy)
    this.enemy.setPath(this.path)
    this.bullets = []
    // this runs once when the scene is created
    // initialize variables and create object here
    // create colliders after all objects exist
    this.createColliders();
  }

  update(timestamp, delta) {
    this.nextEnemy -= delta;
    if (this.nextEnemy <= 0) {
      this.enemy = new Enemy(this, 100, 100)
      this.enemy.setPath(this.path);
      this.enemies.push(this.enemy);
      this.nextEnemy = 5000;
    }
  }


  createColliders() {
    this.physics.add.overlap(
      this.swordRange,
      this.enemies,
      (range, Enemy) => {
        this.bullets.push(new Bullets(this, range.x, range.y, Enemy))
      },
      null,
      this
    )
    // this.physics.add.overlap(
    //   this.enemies,
    //   this.bullets,
    //   (enemy, bullet) => {
    //     enemy.destroy()
    //     bullet.destroy()
    //   },
    //   null,
    //   this
    // )
    this.physics.add.overlap(
      this.enemies,
      this.base,
      (enemy, base) => {
        enemy.destroy()
        base.destroy()
      },
      null,
      this
    )
  }
}
