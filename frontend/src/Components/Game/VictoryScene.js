import Phaser from 'phaser';

export default class VictoryScene extends Phaser.Scene {
  constructor() {
    super({ key: 'VictoryScene' });
  }

  init(data) {
    this.totalElapsedTime = data.totalElapsedTime || 0;
  }

  create() {
    const formattedTime = VictoryScene.formatTime(this.totalElapsedTime);

    this.add.text(200, 200, `Congratulations! You completed all levels in ${formattedTime}!`, {
      fontSize: '32px',
      fill: '#fff',
    });

    this.add.text(200, 250, 'Press SPACE to play again', {
      fontSize: '24px',
      fill: '#fff',
    });

    this.input.keyboard.on('keydown-SPACE', () => this.restartGame(), this);
  }

  restartGame() {
    // Réinitialiser le niveau à 1 après avoir terminé le niveau 3
    this.scene.get('GameScene').currentLevel = 1;
    this.scene.start('GameScene');
  }

  static formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    return formattedTime;
  }
}
