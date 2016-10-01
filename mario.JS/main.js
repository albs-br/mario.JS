// NES screen has 256x240 pixels, or 16x15 tiles (each tile is 16x16 pixels)
const NES_HORIZONTAL_RES = 256; // 16 tiles
const NES_VERTICAL_RES = 240; // 15 tiles

var c = $("#myCanvas")[0];
c.width = NES_HORIZONTAL_RES;
c.height = NES_VERTICAL_RES;
var ctx = c.getContext("2d");



marioSpritesEnum = {
	STANDING: 0,
	WALKING1: 1,
	WALKING2: 2,
	WALKING3: 3,
	JUMPING: 5,
	CROUCHING: 6
}

var mario = {
	X: (NES_HORIZONTAL_RES/2) - (16/2), //middle of screen
	Y: 16*12,
	lookingTo: 'right', // 'left' or 'right'
	spriteNumber: marioSpritesEnum.STANDING,
	state: 0, // 0: Mario, 1: Super Mario, 2: Luigi, 3: Super Luigi
	jumpHeight: 0,
	falling: false
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

		var yTile = 14 * 16;
		if (mario.Y > yTile - 32) {
			mario.Y = yTile - 32;
			mario.falling = false;
			mario.jumpHeight = 0;
		}
	}
	else if (mario.jumpHeight > 0 && !gamePad.A) { // released the jump button during a jump
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

		if (mario.jumpHeight >= maxJumpHeight) {
			mario.jumpHeight = maxJumpHeight;
			mario.falling = true;
		}
	}
	else if (gamePad.down) {
		mario.spriteNumber = marioSpritesEnum.CROUCHING;
	}
	else if (!gamePad.left && !gamePad.right) {
		mario.spriteNumber = marioSpritesEnum.STANDING;
	}
	else if (gamePad.right) {
		mario.lookingTo = 'right';

		if (gamePad.B) {
			mario.X += 2; // running
		}
		else {
			mario.X++;
		}

		if (mario.X > NES_HORIZONTAL_RES - 16) {
			mario.X = NES_HORIZONTAL_RES - 16;
			mario.spriteNumber = marioSpritesEnum.STANDING;
		}
		else {
			if (mario.X % 3 == 0) {
				mario.spriteNumber++;
				if (mario.spriteNumber > marioSpritesEnum.WALKING3) {
					mario.spriteNumber = marioSpritesEnum.WALKING1;
				}
			}
		}
	}
	else if (gamePad.left) {
		mario.lookingTo = 'left';

		if (gamePad.B) {
			mario.X -= 2; // running
		}
		else {
			mario.X--;
		}

		if (mario.X < 0) {
			mario.X = 0;
			mario.spriteNumber = marioSpritesEnum.STANDING;
		}
		else {
			if (mario.X % 3 == 0) {
				mario.spriteNumber++;
				if (mario.spriteNumber > marioSpritesEnum.WALKING3) {
					mario.spriteNumber = marioSpritesEnum.WALKING1;
				}
			}
		}
	}
	


	
	// Draw sprites
	drawMario(mario.spriteNumber, mario.state, mario.X, mario.Y, mario.lookingTo);
	//drawMario(mario.spriteNumber, 1, mario.X, 32, mario.lookingTo);
	//drawMario(mario.spriteNumber, 2, mario.X, 48, mario.lookingTo);
	//drawMario(mario.spriteNumber, 3, mario.X, 80, mario.lookingTo);
}

//$(gameLoop);
$(function () {
	window.setInterval(gameLoop, 25);
});
