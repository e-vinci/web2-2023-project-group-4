import Phaser from 'phaser';
import cat from '../../assets/logo_ebauche.png';
import goal from '../../assets/food.png';
import trap from '../../assets/trap.png';

const SCENE_WIDTH = window.innerWidth;
const SCENE_HEIGHT = 600;
const PLAYER_SCALE = 0.1;
const GOAL_SCALE = 0.5;
const OBSTACLE_SCALE = 0.05;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    this.timeElapsed = 0;
    this.currentLevel = 1;
  }

  preload() {
    this.load.image('cat', cat);
    this.load.image('goal', goal);
    this.load.image('obstacle', trap);
  }

  create() {
    this.initializeUI();
    this.setupEnvironment();
    this.setupKeyboardControls();
    this.setupTimer();
  }

  update() {
    this.handlePlayerMovement();
    this.checkGoalCollision();
    this.checkObstacleCollision();
  }

  setupEnvironment() {
    this.player = this.createPlayer(100, 450);
    this.goal = this.createGoal(700, 100);

    this.physics.add.existing(this.player);
    this.physics.add.existing(this.goal);

    this.obstacles = this.physics.add.group();
    this.physics.world.setBounds(0, 0, SCENE_WIDTH, SCENE_HEIGHT);

    this.createLevel();
  }

  setupKeyboardControls() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  initializeUI() {
    this.timeText = this.add.text(16, 48, 'Time: 0', { fontSize: '24px', fill: '#fff' });
  }

  setupTimer() {
    this.time.addEvent({
      delay: 1000,
      callback: this.updateTime,
      callbackScope: this,
      loop: true,
    });
  }

  handlePlayerMovement() {
    let velocityX = 0;
    let velocityY = 0;

    if (this.cursors.left.isDown) {
      velocityX = -200;
    } else if (this.cursors.right.isDown) {
      velocityX = 200;
    }

    if (this.cursors.up.isDown) {
      velocityY = -200;
    } else if (this.cursors.down.isDown) {
      velocityY = 200;
    }

    this.player.setVelocityX(velocityX);
    this.player.setVelocityY(velocityY);
  }

  checkGoalCollision() {
    if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.goal.getBounds())) {
      this.currentLevel += 1;

      if (this.currentLevel <= 3) {
        this.createLevel();
      } else {
        this.scene.start('VictoryScene', { totalElapsedTime: this.timeElapsed });
      }
    }
  }

  checkObstacleCollision() {
    this.obstacles.children.iterate((obstacle) => {
      if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), obstacle.getBounds())) {
        this.scene.start('FailureScene');
      }
    });
  }

  updateTime() {
    this.timeElapsed += 1;
    this.timeText.setText(`Time: ${this.timeElapsed}`);
  }

  createPlayer(x, y) {
    const player = this.physics.add.sprite(x, y, 'cat').setScale(PLAYER_SCALE);
    player.setCollideWorldBounds(true);
    return player;
  }

  createGoal(x, y) {
    return this.physics.add.sprite(x, y, 'goal').setScale(GOAL_SCALE);
  }

  createLevel() {
    this.player.setPosition(100, 450);
    this.goal.setPosition(700, 100);

    this.timeElapsed = 0;

    this.player.setVelocity(0);

    const levelConfig = GameScene.getLevelConfig(this.currentLevel);

    this.obstacles.clear(true, true);
    this.createRandomObstacles(levelConfig.numObstacles);

    this.timeText.setText(`Time: ${this.timeElapsed}`);
  }

  static getLevelConfig(level) {
    switch (level) {
      case 1:
        return { numObstacles: 5, obstacleSpeed: 150 };
      case 2:
        return { numObstacles: 8, obstacleSpeed: 200 };
      case 3:
        return { numObstacles: 10, obstacleSpeed: 250 };
      default:
        return { numObstacles: 5, obstacleSpeed: 150 };
    }
  }

  createRandomObstacles(numObstacles) {
    for (let i = 0; i < numObstacles; i += 1) {
      let x;
      let y;
      let obstacleOverlap;

      do {
        x = Phaser.Math.Between(0, SCENE_WIDTH);
        y = Phaser.Math.Between(0, SCENE_HEIGHT);
        obstacleOverlap = this.physics.overlap(this.player, this.obstacles, () => true);
      } while (obstacleOverlap);

      const obstacle = this.physics.add.sprite(x, y, 'obstacle').setScale(OBSTACLE_SCALE);
      this.obstacles.add(obstacle);
    }
  }
}
