// Each line of the scenario array represents one column of tiles on screen
// each screen column has 15 tiles (16x16 pixels each)
var scenario_1 = [
	// For example, this line represents 14 tiles blank (null), and the last tile 
	// with the first (index 0) tile of the tileset sheet (Tileset.png)
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0],

	// You can use a kind of RLE (Run Length Encoding) to save typing.
	// The above represents 14 tiles null, followed by one tile of 0 index.
	// This represents exactly the same as the previous line:
	[[null, 14], 0],

	[[null, 14], 0],
	[[null, 14], 0],
	[[null, 14], 0],
	[[null, 13], 3, 0],
	[[null, 14], 0],
	[[null, 14], 0],
	[[null, 14], 0],
	[[null, 15]],
	[[null, 15]],
	[[null, 15]],
	[[null, 14], 0],
	[[null, 14], 0],
	[[null, 14], 0],
	[[null, 14], 0]

];

var scenario_Test = [
	[[1, 10], [2, 5]],
	[[1, 8], 3, 4, [5, 5]],
	[null, null, [1, 4], 4, 3, [5, 7]],
];

var scenario = [];

// Converts a packed scenario (with RLE) in a raw scenario
function loadScenario(packedScenario) {

	for (col = 0; col < packedScenario.length; col++) {

		colArray = [];

		var line = 0;
		for (item = 0; item < packedScenario[col].length; item++) {

			var tile = packedScenario[col][item];

			if (tile != null && tile.constructor === Array) {
				var repeatedTile = tile[0];
				var repeatNumber = tile[1];
				for (i = 0; i < repeatNumber; i++) {
					colArray.push(repeatedTile);
				}

				line += repeatNumber - 1;
			}
			else {
				colArray.push(tile);
			}

			line++;
		}

		scenario.push(colArray);
	}
}