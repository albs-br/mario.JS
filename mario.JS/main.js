// NES screen has 256x240 pixels, or 16x15 tiles (each tile is 16x16 pixels)
const NES_HORIZONTAL_RES = 256; // 16 tiles
const NES_VERTICAL_RES = 240; // 15 tiles

var ctx;
var timer;

var gameInit = function() {
	var c = $("#myCanvas")[0];
	c.width = NES_HORIZONTAL_RES;
	c.height = NES_VERTICAL_RES;
	ctx = c.getContext("2d");

	loadScenario(scenario_1);

	timer = window.setInterval(gameLoop, 25);
}


var gameLoop = function() {
	
	clearScreen();



	showGamePadState();

	var maxJumpHeight = 16 * 4;

	// Get input & refresh game object positions and actions
	if (mario.falling) {

		var jumpSpeed;
		if (mario.jumpHeight < maxJumpHeight * (2 / 3)) {
			jumpSpeed = 4;
		}
		else {
			jumpSpeed = 3;
		}

		mario.jumpHeight -= jumpSpeed;
		mario.Y += jumpSpeed;
		mario.X += mario.horizontalSpeed;
		if (mario.X < 0) {
			mario.X = 0;
		}
		else if (mario.X > NES_HORIZONTAL_RES - 16) {
			mario.X = NES_HORIZONTAL_RES - 16;
		}

		//var yTile = 14 * 16;
		//if (mario.Y > yTile - 32) {
		//	mario.Y = yTile - 32;
		//	mario.falling = false;
		//	mario.jumpHeight = 0;
		//}
		if (testCollisionScenario(mario)) {
			// Undo move
			mario.Y -= jumpSpeed;
			mario.falling = false;
			mario.jumpHeight = 0;
		}

		if (mario.Y > NES_VERTICAL_RES) {
			console.info('GAME OVER');
			window.clearInterval(timer);
		}
	}
	else if (mario.isJumping() && !gamePad.A) { // released the jump button during a jump
		mario.falling = true;
	}
	else if (gamePad.A) {
		mario.spriteNumber = marioSpritesEnum.JUMPING;

		var jumpSpeed;
		if (mario.jumpHeight < maxJumpHeight * (2/3)) {
			jumpSpeed = 4;
		}
		else {
			jumpSpeed = 3;
		}

		mario.jumpHeight += jumpSpeed;
		mario.Y -= jumpSpeed;
		mario.X += mario.horizontalSpeed;
		if (mario.X < 0) {
			mario.X = 0;
		}
		else if (mario.X > NES_HORIZONTAL_RES - 16) {
			mario.X = NES_HORIZONTAL_RES - 16;
		}

		if (mario.jumpHeight >= maxJumpHeight) {
			mario.jumpHeight = maxJumpHeight;
			mario.falling = true;
		}
	}
	else if (gamePad.down) {
		mario.spriteNumber = marioSpritesEnum.CROUCHING;
		mario.horizontalSpeed = 0;
	}
	else if (!gamePad.left && !gamePad.right) {
		mario.spriteNumber = marioSpritesEnum.STANDING;
		mario.horizontalSpeed = 0;
	}
	else if (gamePad.right) {
		mario.lookingTo = 'right';

		if (gamePad.B) {
			// running
			mario.horizontalSpeed = 2;
		}
		else {
			mario.horizontalSpeed = 1;
		}

		mario.X += mario.horizontalSpeed;

		if (mario.X > NES_HORIZONTAL_RES - 16) {
			mario.X = NES_HORIZONTAL_RES - 16;
			mario.spriteNumber = marioSpritesEnum.STANDING;
		}
		else if (testCollisionScenario(mario)) {
			// Undo move
			mario.X -= mario.horizontalSpeed;
			mario.spriteNumber = marioSpritesEnum.STANDING;
		}
		else {
			walk();
		}
	}
	else if (gamePad.left) {
		mario.lookingTo = 'left';

		if (gamePad.B) {
			// running
			mario.horizontalSpeed = -2;
		}
		else {
			mario.horizontalSpeed = -1;
		}

		mario.X += mario.horizontalSpeed;

		if (mario.X < 0) {
			mario.X = 0;
			mario.spriteNumber = marioSpritesEnum.STANDING;
		}
		else if (testCollisionScenario(mario)) {
			// Undo move
			mario.X -= mario.horizontalSpeed;
			mario.spriteNumber = marioSpritesEnum.STANDING;
		}
		else {
			walk();
		}
	}
	
	function walk() {
		// Cycling through the step frames
		if (mario.X % 3 == 0) {
			mario.spriteNumber++;
			if (mario.spriteNumber > marioSpritesEnum.WALKING3) {
				mario.spriteNumber = marioSpritesEnum.WALKING1;
			}
		}
	}

	
	// Draw sprites
	drawMario(mario.spriteNumber, mario.state, mario.X, mario.Y, mario.lookingTo);
	//drawMario(mario.spriteNumber, 1, mario.X, 32, mario.lookingTo);
	//drawMario(mario.spriteNumber, 2, mario.X, 48, mario.lookingTo);
	//drawMario(mario.spriteNumber, 3, mario.X, 80, mario.lookingTo);
}

$(function () {
	gameInit();
});
