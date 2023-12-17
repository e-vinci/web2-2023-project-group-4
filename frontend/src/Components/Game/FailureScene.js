import Phaser from 'phaser';

export default class FailureScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FailureScene' });
  }

  create() {
    this.add.text(200, 200, 'You hit an obstacle. Try again!', {
      fontSize: '32px',
      fill: '#fff',
    });

    this.add.text(200, 250, 'Press SPACE to try again', {
      fontSize: '24px',
      fill: '#fff',
    });

    this.input.keyboard.on('keydown-SPACE', () => this.restartGame(), this);
  }

  restartGame() {
    this.scene.start('GameScene');
  }
}
