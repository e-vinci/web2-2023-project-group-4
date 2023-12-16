import Phaser from 'phaser';
import catImage from '../../assets/logo_ebauche.png';
import goalImage from '../../assets/food.png';
import trapImage from '../../assets/trap.png';

const SCENE_WIDTH = window.innerWidth;
const SCENE_HEIGHT = 600;
const PLAYER_SCALE = 0.1;
const GOAL_SCALE = 0.5;
const OBSTACLE_SCALE = 0.05;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.image('background', 'path/to/background.png');
    this.load.image('cat', catImage);
    this.load.image('goal', goalImage);
    this.load.image('obstacle', trapImage);
  }

  create() {
    // Create player and goal
    this.player = this.physics.add.sprite(100, 450, 'cat').setScale(PLAYER_SCALE);
    this.goal = this.physics.add.sprite(700, 100, 'goal').setScale(GOAL_SCALE);

    // Enable physics for player and goal
    this.physics.add.existing(this.player);
    this.physics.add.existing(this.goal);

    // Create and position random obstacles
    this.obstacles = this.physics.add.group();
    this.createRandomObstacles();

    // Add world bounds to prevent the player from going off-screen
    this.physics.world.setBounds(0, 0, SCENE_WIDTH, SCENE_HEIGHT);

    // Set up keyboard controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Handle player movement
    this.handlePlayerMovement();

    // Check if the player reached the goal
    this.checkGoalCollision();

    // Check if the player hit any obstacles
    this.checkObstacleCollision();
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
    // Check if the player reached the goal
    if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.goal.getBounds())) {
      this.scene.start('VictoryScene');
    }
  }

  checkObstacleCollision() {
    // Check if the player hit any obstacles
    this.obstacles.children.iterate((obstacle) => {
      if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), obstacle.getBounds())) {
        this.scene.start('FailureScene');
      }
    });
  }

  createRandomObstacles() {
    // Create a certain number of random obstacles
    const numObstacles = Phaser.Math.Between(5, 10);
  
    for (let i = 0; i < numObstacles; i += 1) {
      let x;
      let y;
      let obstacleOverlap;
  
      do {
        // Generate random coordinates for the obstacle
        x = Phaser.Math.Between(0, SCENE_WIDTH);
        y = Phaser.Math.Between(0, SCENE_HEIGHT);
  
        // Check for overlap with the player
        obstacleOverlap = this.physics.overlap(this.player, this.obstacles, (player, obstacle) => player !== obstacle);
      } while (obstacleOverlap);
  
      const obstacle = this.physics.add.sprite(x, y, 'obstacle').setScale(OBSTACLE_SCALE);
      this.obstacles.add(obstacle);
    }
  }
  
}