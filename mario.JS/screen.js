var marioSprites = $("#sprites")[0];
var tileSprites = $("#tileset")[0];

function clearScreen() {

	ctx.fillStyle = '#8080A0'; //"#FFFFFF";
	ctx.fillRect(0, 0, NES_HORIZONTAL_RES, NES_VERTICAL_RES);

	//for (x = 0; x < NES_HORIZONTAL_RES; x += 16) {
	//	drawTile(0, 0, x, 14 * 16);
	//}

	for (col = 0; col < scenario.length; col++) {

		//console.info(scenario[col]);
		//break;
		var line = 0;
		for (item = 0; item < scenario[col].length; item++) {

			//console.info(line);

			var tile = scenario[col][item];
			//console.info(tile);

			if (tile != null) {
				if (tile.constructor === Array) {
					//console.info('Array');
					var repeatTile = tile[0];
					var repeatNumber = tile[1];
					//console.info(repeatNumber);
					if (repeatTile != null) {
						for (i = 0; i < repeatNumber; i++) {

							console.info("(line + i): " + (line + i));

							var tileX = repeatTile;
							var tileY = 0;
							drawTile(tileX, tileY, col * 16, (line + i) * 16);
						}
					}

					line += repeatNumber - 1;
				}
				else {
					var tileX = tile;
					var tileY = 0;
					drawTile(tileX, tileY, col * 16, line * 16);
				}
			}

			line++;
		}

		//break;
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