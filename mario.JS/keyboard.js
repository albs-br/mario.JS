const LEFT_KEY = 37;	// Left Arrow
const RIGHT_KEY = 39;	// Right Arrow
const UP_KEY = 38;		// Up Arrow
const DOWN_KEY = 40;	// Down Arrow
const B_KEY = 16;		// Shift key
const A_KEY = 17;		// Ctrl key

var gamePad = {
	left: false,
	right: false,
	up: false,
	down: false,
	B: false,
	A: false
}

$(document).keydown(function (e) {
	switch(e.which) {
		case LEFT_KEY:
			gamePad.left = true;
		break;

		case UP_KEY:
			gamePad.up = true;
			break;

		case RIGHT_KEY:
			gamePad.right = true;
		break;

		case DOWN_KEY:
			gamePad.down = true;
		break;

		case B_KEY:
			gamePad.B = true;
		break;

		case A_KEY:
			gamePad.A = true;
		break;

		default: return; // exit this handler for other keys
	}
	e.preventDefault(); // prevent the default action (scroll / move caret)
});

$(document).keyup(function(e) {
	switch(e.which) {
		case LEFT_KEY:
			gamePad.left = false;
		break;

		case UP_KEY:
			gamePad.up = false;
		break;

		case RIGHT_KEY:
			gamePad.right = false;
		break;

		case DOWN_KEY:
			gamePad.down = false;
		break;

		case B_KEY:
			gamePad.B = false;
		break;

		case A_KEY:
			gamePad.A = false;
		break;

		default: return; // exit this handler for other keys
	}
	e.preventDefault(); // prevent the default action (scroll / move caret)
});

function showGamePadState() {
	if (gamePad.up)
		$("#up").show();
	else
		$("#up").hide();

	if (gamePad.left)
		$("#left").show();
	else
		$("#left").hide();

	if (gamePad.B)
		$("#b").show();
	else
		$("#b").hide();

	if (gamePad.A)
		$("#a").show();
	else
		$("#a").hide();
}