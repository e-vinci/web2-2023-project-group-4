import Phaser from 'phaser';

class AlgoGameScene extends Phaser.Scene
{
    preload()
    {
        this.load.path = 'assets/';
        this.load.image('cat1', 'cat1.png');
        this.load.image('cat4', 'cat4.png');
    }

    create ()
    {
        this.anims.create({
            key: 'snooze',
            frames: [
                { key: 'cat1' },
                { key: 'cat4', duration: 50 }
            ],
            frameRate: 8,
            repeat: -1
        });

        this.add.sprite(400, 300, 'cat1')
            .play('snooze');
    }
    

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#fbf0e4',
    scene: [AlgoGameScene]
};

const game = new Phaser.Game(config);

game.anims.addListener()

export default AlgoGameScene ;