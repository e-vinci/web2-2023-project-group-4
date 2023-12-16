import Phaser from 'phaser';
import GameScene from '../Game/GameScene';
import VictoryScene from '../Game/VictoryScene';
import FailureScene from '../Game/FailureScene';

let game;

const GamePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
    <div id="gameDiv" class="d-flex justify-content-center my-3"></div>
  `;

  const config = {
    type: Phaser.AUTO,
    width: window.innerWidth, // Responsive width
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: true, // Enable debug mode during development
      },
    },
    scene: [GameScene, VictoryScene, FailureScene],
    parent: 'gameDiv',
  };

  if (game) game.destroy(true);
  game = new Phaser.Game(config);
};

export default GamePage;
