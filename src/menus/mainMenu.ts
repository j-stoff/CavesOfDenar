import Menu from './menu';
import BattleScene from '../battle/battleScene'
import { SCENE_KEYS, DEBUG_MODE } from '../util';
import { Display, Types } from 'phaser';
import MenuNavButton from './menuNavButton';

export default class MainMenu extends Menu {

    colorString: string;

    constructor ()
    {
        super(SCENE_KEYS.MAIN_MENU);
    }
    init(data: any) {
    }

    preload ()
    {
        // TODO config
        this.load.image('battleButton', 'assets/button-bg.png');
    }

    create ()
    {
        this.colorString = Phaser.Display.Color.RGBToString(251, 66, 255, 1);
        this.cameras.main.setBackgroundColor(this.colorString);

        this.createBattleButton();
        // TODO add other buttons

        if (DEBUG_MODE) {
            console.log("Added menu Nav buttons");
        }
    }

    private createBattleButton() {
        // TODO add text
        let battleScene = new BattleScene(SCENE_KEYS.BATTLE_SCENE);
        let battleButton = new MenuNavButton(this, battleScene);
        let battleButtonImage = this.add.image(0, 0, 'battleButton');
        battleButton.add(battleButtonImage);
        this.add.container(900, 300, battleButton);
    }

}