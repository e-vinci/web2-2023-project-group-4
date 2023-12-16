import Phaser from 'phaser';

export default class VictoryScene extends Phaser.Scene {
  constructor() {
    super({ key: 'VictoryScene' });
  }

  create() {
    this.add.text(200, 200, 'Congratulations! You reached the goal!', {
      fontSize: '32px',
      fill: '#fff'
    });
  }
}