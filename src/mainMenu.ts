import Menu from './menu';

export default class MainMenu extends Menu {

    constructor (scene: any)
    {
        let horiztonal = (window.innerWidth * window.devicePixelRatio) / 2;
        let vertical = (window.innerHeight * window.devicePixelRatio) / 2;
        super(scene, horiztonal, vertical);
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