// Each line of the scenario array represents one column of tiles on screen
// each screen column has 15 tiles (16x16 pixels each)
var scenario = [
	// For example, this line represents 14 tiles blank (null), and the last tile 
	// with the first (index 0) tile of the tileset sheet (Tileset.png)
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0],

	// You can use a kind of RLE (Run Length Encoding) to save typing.
	// The above represents 14 tiles null, followed by one tile of 0 index.
	// This represents exactly the same as the previous line:
	[[null, 14], 0],

	// Test collumns
	//[[1, 10], [2, 5]],
	//[[1, 8], 3, 4, [5, 5]],
	//[null, null, [1, 4], 4, 3, [5, 7]],

	[[null, 14], 0],
	[[null, 14], 0],
	[[null, 14], 0],
	[[null, 14], 0],
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
