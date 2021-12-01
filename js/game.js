// nueva escena
let gameScene = new Phaser.Scene("Game");

// Configuracionde juego
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene
};

// crear jeugo con configuracion
let game = new Phaser.Game(config);
