var TopDownGame = TopDownGame || {};

// loading the game assets
TopDownGame.preload = function(){};

TopDownGame.preload.prototype = {
    preload: function() {
    // show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');// define x and y coordinates.
    this.preloadBar.anchor.setTo(0.5);
        
    this.load.setPreloadSprite(this.preloadBar);// method in Loader entities allows us to grab sprite preloadbar.
        
    // load game assets
    this.load.tilemap('poke-city', 'assets/images/tilemaps/poke-project.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('gameTilesShiny', 'assets/images/tileset-shinygold.png');
    this.load.image('gameTilesPersonen', 'assets/images/personen-dp.png');
    this.load.image('gameTilesCitrine', 'assets/images/terraincitrine.png');
    this.load.image('gameTilesTrainers', 'assets/images/poke-trainers.png');
    this.load.image('gameTilesPokemon', 'assets/images/pokemons.png');
    this.load.image('mew', 'assets/images/mew.png');
    this.load.image('dragonair', 'assets/images/dragonair.png');
    this.load.image('player', 'assets/images/player.png');
    this.load.image('boss', 'assets/images/boss.png');
    
    },
    creat: function() {
        this.state.start('game');
    }
};

/*
  this.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('gameTiles', 'assets/images/tiles.png');
    this.load.image('greencup', 'assets/images/greencup.png');- image
    this.load.image('bluecup', 'assets/images/bluecup.png');- image
    this.load.image('player', 'assets/images/player.png');
    this.load.image('browndoor', 'assets/images/browndoor.png');
    
*/