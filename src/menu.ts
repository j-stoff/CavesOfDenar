import 'phaser';

export default class Menu extends Phaser.GameObjects.Container {

    horiztonalPosition: integer;
    verticalPosition: integer;
    cancelButton: boolean;
    acceptButton: boolean;
    scene: Phaser.Scene;

    constructor (scene: any, horiztonalPosition: integer, verticalPosition: integer)
    constructor (scene: any, horiztonalPosition: integer, verticalPosition: integer, cancelButton?: boolean, acceptButton?: boolean)
    {
        super(scene);
        this.horiztonalPosition = horiztonalPosition;
        this.verticalPosition = verticalPosition;
        this.cancelButton = cancelButton;
        this.acceptButton = acceptButton;
    }

    preload ()
    {
        // load default accept
       //this.scene.load.image('acceptButton', 'assets/ok_button.png');
        // load default cancel button
        //this.scene.load.image('cancelButton', 'assets/cancel_button.png')
        // loads both of these in case they are set later
    }

    create ()
    {
        // Default is to appear in the center of the screen and disable all other non-menu buttons


        // Should have some sort of container?
    }

    /**
     * hasCancelButton
     * @returns true if the cancel button was set, false otherwise.
     */
    public hasCancelButton() {
        return this.cancelButton;
    }

    /**
     * Set if the menu should have a cancel button in the bottom left.
     * @param cancelButton If the menu should have a cancel button on it.
     */
    public setCancelButton(cancelButton: boolean) {
        this.cancelButton = cancelButton;
    }

    /**
     * If the menu has an accept button.
     * @returns true if the menu has an accept button, false otherwise.
     */
    public hasAcceptButton() {
        return this.acceptButton;
    }

    /**
     * Set if the menu should have an accept button in the bottom right.
     * @param acceptButton If the menu should should have an accept button on it.
     */
    public setAcceptButton(acceptButton: boolean) {
        this.acceptButton = acceptButton;
    }

}