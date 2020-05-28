import 'phaser';

export default class MenuNavButton extends Phaser.GameObjects.Container {

    nextScene: Phaser.Scene

    constructor (currentScene: Phaser.Scene, nextScene: Phaser.Scene) 
    constructor (currentScene: Phaser.Scene, nextScene: Phaser.Scene, x?: number, y?: number)
    {
        super(currentScene, x, y);
        this.nextScene = nextScene;
    }


    public goToNextScene() {
        this.on('pointerdown', function() {
            this.scene.transition({
                target: this.nextScene.key,
                duration: 5,
                moveBelow: true,
                onUpdate: this.transitionOut  
            })
        }, this);
    }

    // Handles the scene transition
    transitionOut() {

    }

    public addImageButton(image: any) {

    }
}