marioSpritesEnum = {
	STANDING: 0,
	WALKING1: 1,
	WALKING2: 2,
	WALKING3: 3,
	JUMPING: 5,
	CROUCHING: 6
}

var mario = {
	X: (NES_HORIZONTAL_RES / 2) - (16 / 2), //middle of screen
	Y: 16 * 12,
	lookingTo: 'right', // 'left' or 'right'
	spriteNumber: marioSpritesEnum.STANDING,
	state: 0, // 0: Mario, 1: Super Mario, 2: Luigi, 3: Super Luigi
	horizontalSpeed: 0,
	jumpHeight: 0,
	falling: false,

	isJumping: function () {
		return (this.jumpHeight > 0);
	}
}
