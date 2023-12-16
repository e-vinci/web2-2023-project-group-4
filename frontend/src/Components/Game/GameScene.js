import Phaser from 'phaser';
import forwardImg from '../../assets/forward.jpg';
import leftImg from '../../assets/left.jpg';
import rightImg from '../../assets/right.jpg';
import repeatImg from '../../assets/repeat.png';
import catImg from '../../assets/logo_ebauche.png';
import cancelImg from '../../assets/cancel.jpg';
import metalTiles from '../../assets/Metal_tiles1_extra_4_colors.png';



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
    this.load.image('metalTiles',metalTiles);
  }

  create() {
    const cat = this.add.image(100, 100, 'cat').setScale(0.1);
    const actions = {
      forward: this.add.image(100, 100, 'forward').setScale(0.5),
      left: this.add.image(100, 100, 'left').setScale(0.5),
      right: this.add.image(100, 100, 'right').setScale(0.5),
      repeat: this.add.image(100, 100, 'repeat').setScale(0.5)
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
      this.moveCat(cat);
    });
  }

  createMapTiles(){
    const map = this.make.tilemap({key: 'gamescene'});
    const tilset = map.addTilesetImage('metalicTiles','metalTiles');

    const ground = map.createLayer('ground',tilset);

    this.physics.world.setBounds(0, 0, ground.width, ground.height);
  }

  moveCat(cat) {
    if (this.currentActionIndex < this.actionsSequence.length) {
      const nextAction = this.actionsSequence[this.currentActionIndex];
      this.tweens.add({
        targets: cat,
        x: nextAction.x,
        y: nextAction.y,
        duration: 10,
        onComplete: () => {
          this.currentActionIndex += 1;
          this.moveCat(cat);
        }
      });
    } else {
      this.actionsSequence = [];
      this.currentActionIndex = 0;
    }
  }
}

export default GameScene;
