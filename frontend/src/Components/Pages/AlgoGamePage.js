import Phaser from 'phaser';
import GameScene from '../Game/GameScene';

let game;

const GamePage = () => {
  const phaserGame = `
<div id="gameDiv" class="d-flex justify-content-center my-3">
</div>`;

  const main = document.querySelector('main');
  main.innerHTML = phaserGame;

  const config = {
    type: Phaser.AUTO,
    width: 1520,
    height: 700,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    scene: [GameScene],
    parent: 'gameDiv',
  };
  
  if (game) game.destroy(true);
  game = new Phaser.Game(config);
};

export default GamePage;