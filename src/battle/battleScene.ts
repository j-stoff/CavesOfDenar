import 'phaser'

// Main class for the Battle scene
export default class BattleScene extends Phaser.Scene {

    constructor (key: string) 
    {
        super({
            key: key
        });
    }

    init(data: any) {
    }

    preload ()
    {
        // TODO config
    }

    create ()
    {
        // TODO add something
        console.log("In Battle!!");
    }

}

