import Phaser from 'phaser';
import forwardImg from '../../assets/forward.jpg';
import leftImg from '../../assets/left.jpg';
import rightImg from '../../assets/right.jpg';
import repeatImg from '../../assets/repeat.png';
import catImg from '../../assets/logo_ebauche.png';
import cancelImg from '../../assets/cancel.jpg';

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    this.actionsSequence = [];
    this.currentActionIndex = 0;
  }

  preload() {
    this.load.image('forward', forwardImg);
    this.load.image('left', leftImg);
    this.load.image('right', rightImg);
    this.load.image('repeat', repeatImg);
    this.load.image('cat', catImg);
    this.load.image('cancel', cancelImg);
  }

  create() {
    const chat = this.add.image(100, 100, 'cat').setScale(0.1);

    const actions = {
      forward: this.add.image(200, 500, 'forward').setScale(0.5),
      left: this.add.image(300, 500, 'left').setScale(0.5),
      right: this.add.image(400, 500, 'right').setScale(0.5),
      repeat: this.add.image(500, 500, 'repeat').setScale(0.5)
    };

    Object.keys(actions).forEach(action => {
      actions[action].setInteractive({ draggable: true });

      actions[action].on('pointerdown', () => {
        actions[action].on('drag', (pointer, dragX, dragY) => {
          actions[action].x = dragX;
          actions[action].y = dragY;
        });

        actions[action].on('dragend', () => {
          this.actionsSequence.push({ x: actions[action].x, y: actions[action].y });
        });
      });
    });

    const annulerBouton = this.add.image(70, 50, 'cancel').setInteractive().setScale(0.12);
    annulerBouton.on('pointerdown', () => {
      if (this.actionsSequence.length > 0) {
        this.actionsSequence.pop();
      }
    });

    const executerBouton = this.add.text(1400, 50, 'Exécuter', { fill: '#ffffff' }).setInteractive();
    executerBouton.on('pointerdown', () => {
      this.currentActionIndex = 0;
      this.moveChat(chat);
    });
  }

  moveChat(chat) {
    if (this.currentActionIndex < this.actionsSequence.length) {
      const nextAction = this.actionsSequence[this.currentActionIndex];
      this.tweens.add({
        targets: chat,
        x: nextAction.x,
        y: nextAction.y,
        duration: 500,
        onComplete: () => {
          this.currentActionIndex += 1;
          this.moveChat(chat);
        }
      });
    } else {
      this.actionsSequence = [];
      this.currentActionIndex = 0;
    }
  }
}

export default GameScene;
