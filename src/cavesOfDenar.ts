import 'phaser';

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('game');
    }

    preload ()
    {
        // TODO config
    }

    create ()
    {
        // TODO add something
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Game
};

const game = new Phaser.Game(config);