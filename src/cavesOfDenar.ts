import 'phaser';
import MainMenu from './menus/mainMenu';
import { SCENE_KEYS } from './util';

export default class HomeScreen extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: SCENE_KEYS.HOME
        });
    }

    preload ()
    {
        // TODO config
    }

    create ()
    {
        // TODO add something
        // Add on click transition to main screen
        //this.scene.start(SCENE_KEYS.MAIN_MENU, {data: "Loaded Home, going to main menu"});
        
        this.input.once('pointerdown', function() {
            this.scene.transition({
                target: SCENE_KEYS.MAIN_MENU,
                duration: 100,
                moveBelow: true,
                onUpdate: this.transitionOut
            })
        }, this);
        

    
    }
    transitionOut (progress: string)
    {
        console.log("transitioning");
        //this.face.y = (600 * progress);
    }
}

// Use this later    Phaser.Color.getRandomColor(50, 255, 255);

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    scene: [HomeScreen, MainMenu]
};

const game = new Phaser.Game(config);