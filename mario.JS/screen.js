var marioSprites = $("#sprites")[0];
var tileSprites = $("#tileset")[0];

function clearScreen() {

	ctx.fillStyle = '#8080A0'; //"#FFFFFF";
	ctx.fillRect(0, 0, NES_HORIZONTAL_RES, NES_VERTICAL_RES);

	//for (x = 0; x < NES_HORIZONTAL_RES; x += 16) {
	//	drawTile(0, 0, x, 14 * 16);
	//}

	for (col = 0; col < scenario.length; col++) {

		for (line = 0; line < scenario[col].length; line++) {

			var tile = scenario[col][line];

			if (tile != null) {
				var tileX = tile;
				var tileY = 0;
				drawTile(tileX, tileY, col * 16, line * 16);
			}
		}
	}

}

function drawMario(col, row, x, y, lookingTo) {
	var spriteWidth = 16;
	
	var spriteHeight;
	if(row % 2 == 0) {
		// Super Mario/Luigi
		spriteHeight = 32;
	}
	else {
		// Small Mario/Luigi
		spriteHeight = 16;
		if(col == 6) {
			col = 0; // Small Mario don't couch
		}
	}
	
	var xSprites;
	if(lookingTo == 'right') {
		xSprites = col*spriteWidth;
	}
	else if(lookingTo == 'left'){
		xSprites = (41-col)*spriteWidth;
	}

	var ySprites = (Math.floor(row/2) * 32) + (Math.floor(row/2) * 16) + ((row % 2) * 32);
	
	ctx.drawImage(marioSprites, xSprites, ySprites, spriteWidth, spriteHeight, x, y, spriteWidth, spriteHeight);
}

function drawTile(col, row, x, y) {
	var tileWidth = 16;
	var tileHeight = 16;

	var xTile = col * tileWidth;
	var yTile = row * tileHeight;

	ctx.drawImage(tileSprites, xTile, yTile, tileWidth, tileHeight, x, y, tileWidth, tileHeight);
}