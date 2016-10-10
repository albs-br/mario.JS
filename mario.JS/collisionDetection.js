function pixelInBox(x, y, box) {
	return (x >= box.left() && x <= box.right() &&
		y >= box.top() && y <= box.bottom());
}

//TODO: to solve this naming issue (this one and the function before)
function pointInBox(point, box) {
	return pixelInBox(point.X, point.Y, box);
}

// returns bool
function testCollision_bool(box1, box2) {
	//console.info("box1.left(): " + box1.left());
	//console.info("box1.right(): " + box1.right());
	//console.info("box2.left(): " + box2.left());
	//console.info("box2.right(): " + box2.right());

	//console.info("box1.top(): " + box1.top());
	//console.info("box2.top(): " + box2.top());
	//console.info("box1.bottom(): " + box1.bottom());
	//console.info("box2.bottom(): " + box2.bottom());

	return (
		//test if any of the corners of box1 is inside box2
		testCollision_corner_inside_box(box1, box2) ||
		
		//test if any of the corners of box2 is inside box1
		testCollision_corner_inside_box(box2, box1) ||

		//test if one box pass throught the other (no corner inside)
		testCollision_box_pass_through(box1, box2) ||
		testCollision_box_pass_through(box2, box1)
		);
}

function testCollision_corner_inside_box(box1, box2) {
	return (pixelInBox(box1.left(), box1.top(), box2) || pixelInBox(box1.left(), box1.bottom(), box2) ||
			pixelInBox(box1.right(), box1.top(), box2) || pixelInBox(box1.right(), box1.bottom(), box2));
}

function testCollision_box_pass_through(box1, box2) {
	return (box1.left() >= box2.left() && box1.left() <= box2.right() &&
			box1.right() >= box2.left() && box1.right() <= box2.right() &&
			box1.top() <= box2.top() && box1.bottom() >= box2.bottom());
}

// returns intersection rectangle
function testCollision_box(box1, box2) {

	if (!testCollision_bool(box1, box2)) return null;
	
	var x, y, width, height;

	x = Math.max(box1.X, box2.X);
	y = Math.max(box1.Y, box2.Y);
	width = Math.min(box1.right(), box2.right()) - x + 1;
	height = Math.min(box1.bottom(), box2.bottom()) - y + 1;

	var output = new Box(x, y, width, height);

	output.hitPositionH = null;
	output.hitPositionV = null;

	if (output.right() == box1.right() && output.left() == box1.left()) {
		output.hitPositionH = 'left&right';
	}
	else if (output.right() == box1.right()) {
		output.hitPositionH = 'right';
	}
	else if (output.left() == box1.left()) {
		output.hitPositionH = 'left';
	}

	//console.info('output.top(): ' + output.top());
	//console.info('output.bottom(): ' + output.bottom());
	//console.info('box1.bottom(): ' + box1.bottom());

	if (output.top() == box1.top() && output.bottom() == box1.bottom()) {
		output.hitPositionV = 'top&bottom';
	}
	else if (output.top() == box1.top()) {
		output.hitPositionV = 'top';
	}
	else if (output.bottom() == box1.bottom()) {
		output.hitPositionV = 'bottom';
	}

	//console.info('output.hitPositionH: ' + output.hitPositionH);
	//console.info('output.hitPositionV: ' + output.hitPositionV);

	// hit at diagonal, check what side prevails
	if (output.hitPositionH != null && output.hitPositionV != null &&
		output.hitPositionH != 'left&right' && output.hitPositionV != 'top&bottom') {
		if (output.width >= output.height) {
			output.hitPosition = output.hitPositionV;
		}
		else {
			output.hitPosition = output.hitPositionH;
		}
	}
	else {
		output.hitPosition = output.hitPositionH || output.hitPositionV; // Javascript null coalescing
	}

	return output;
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