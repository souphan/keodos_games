// Created unique name space.
var TopDownGame = TopDownGame || {}; // Means that if the object exists already, we’ll use it. Otherwise we'll use a new empty object.

// Initiated a new game and set the size of the window
TopDownGame.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, ''); // Phaser.Auto autoselects whether the game is rendered on CANVAS or use WebGL.

// Registering the state of the game
TopDownGame.game.state.add('boot', TopDownGame.boot); // Load preload assets
TopDownGame.game.state.add('preload', TopDownGame.preload);// Load game assets
TopDownGame.game.state.add('game', TopDownGame.game); // Last as it takes longer

// Launching the boot state
TopDownGame.game.state.start('boot');