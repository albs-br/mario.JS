function pixelInBox(x, y, box) {
	return (x > box.left() && x < box.right() &&
		y > box.top() && y < box.bottom());
}

function testCollision_bool(box1, box2) {
	// returns bool
	return (pixelInBox(box1.left(), box1.top(), box2) || pixelInBox(box1.left(), box1.bottom(), box2) ||
		pixelInBox(box1.right(), box1.top(), box2) || pixelInBox(box1.right(), box1.bottom(), box2));
}

function testCollision_rect(box1, box2) {
	// returns rectangle
	//box1.left()
}

function testCollisionScenario(box) {
	return (isTileBlockable(box.left(), box.top()) || isTileBlockable(box.left(), box.bottom()) ||
		isTileBlockable(box.right(), box.top()) || isTileBlockable(box.right(), box.bottom()));
}

function tileOfPixel(x, y) {
	var col = Math.floor(x / 16);
	var line = Math.floor(y / 16);

	//console.info(col);

	return scenario[col][line];
}

function isTileBlockable(x, y) {
	var tile = tileOfPixel(x, y);

	//console.info(tile);

	if (tile == null) return false;

	return (tile >= 0 && tile <= 3);
}
//function testCollisionScenario(box) {
//	for (col = 0; col < scenario.length; col++) {

//		for (line = 0; line < scenario[col].length; line++) {

//			var tile = scenario[col][line];

//			if (tile >= 0 && tile <= 3) {
//				testCollision(box)
//			}
//		}
//	}
//}