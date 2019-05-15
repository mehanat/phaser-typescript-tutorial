'use strict';
/** Imports */
import State from './state';

// The main state of the game
export default class MainState extends State {
  player: Phaser.Sprite;

  cursors: Phaser.CursorKeys;

  graphics: Phaser.Graphics;

  create(): void {
    // Phaser supports some physical engines (p2, box2d, ninja and arcate).
    // For our game, we don't need a strong physical simulation, so we'll choose
    // `arcade` model.
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.stage.backgroundColor = '#2d2d2d';




    // The player and its settings
    this.player = this.game.add.sprite(32, this.game.world.height - 150, 'dude');
    this.graphics = this.game.add.graphics(0, 0);
    this.graphics.beginFill(0xFF0000, 1);
    this.graphics.drawRect(300, 300, 40, 40);
    this.graphics.drawRect(200, 300, 40, 40);
    this.graphics.drawRect(300, 200, 40, 40);
    this.graphics.drawRect(100, 300, 40, 40);
    this.graphics.drawRect(300, 100, 40, 40);

    //  We need to enable physics on the player
    this.game.physics.arcade.enable(this.player);

    //  Player physics properties. Give the little guy a slight bounce.
    this.player.body.bounce.y = 0.2;
    this.player.body.collideWorldBounds = true;

  }

  update() {
    this.player.frame = 4;
    if (this.cursors.left.isDown)
    {
        this.player.reset(this.player.x - 5, this.player.y);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.reset(this.player.x + 5, this.player.y);
    }
    else if (this.cursors.up.isDown)
    {
        this.player.reset(this.player.x, this.player.y - 5);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.reset(this.player.x, this.player.y + 5);
    }

  }
}
