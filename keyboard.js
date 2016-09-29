var gamePad = {
	left: false,
	right: false,
	up: false,
	down: false,
	B: false,
	A: false
}

$(document).keydown(function (e) {
	//console.info(e.which);
	switch(e.which) {
		case 37: // left
			gamePad.left = true;
		break;

		case 38: // up
			gamePad.up = true;
			break;

		case 39: // right
			gamePad.right = true;
		break;

		case 40: // down
			gamePad.down = true;
		break;

		case 90: // 'Z' key
			gamePad.B = true;
		break;

		case 88: // 'X' key
			gamePad.A = true;
		break;

		default: return; // exit this handler for other keys
	}
	e.preventDefault(); // prevent the default action (scroll / move caret)
});

$(document).keyup(function(e) {
	switch(e.which) {
		case 37: // left
			gamePad.left = false;
		break;

		case 38: // up
			gamePad.up = false;
		break;

		case 39: // right
			gamePad.right = false;
		break;

		case 40: // down
			gamePad.down = false;
		break;

		case 90: // 'Z' key
			gamePad.B = false;
		break;

		case 88: // 'X' key
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