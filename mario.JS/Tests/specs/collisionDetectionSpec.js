describe("collisionDetection", function () {
	var box1, box2;

	beforeEach(function () {
		box1pixel = new Box(5, 5, 1, 1);

		// These boxes are overlapping
		box1 = new Box(12, 9, 30, 15);
		box2 = new Box(22, 12, 29, 8);

		//TODO:
		// Boxes without contact
		//box3
		//box4
	});

	// just to verifiy if jasmine is working ok
	it("1 + 1", function () {
		expect(1 + 1).toEqual(2);
	});

	it("1 pixel box testing", function () {
		// Act & Assert
		expect(box1pixel.left()).toEqual(5);
		expect(box1pixel.right()).toEqual(5);
		expect(box1pixel.top()).toEqual(5);
		expect(box1pixel.bottom()).toEqual(5);
		expect(box1pixel.topLeft().X).toEqual(5);
		expect(box1pixel.topLeft().Y).toEqual(5);
		expect(box1pixel.topRight().X).toEqual(5);
		expect(box1pixel.topRight().Y).toEqual(5);
		expect(box1pixel.bottomLeft().X).toEqual(5);
		expect(box1pixel.bottomLeft().Y).toEqual(5);
		expect(box1pixel.bottomRight().X).toEqual(5);
		expect(box1pixel.bottomRight().Y).toEqual(5);
	});

	it("basic box testing", function () {
		// Arrange

		// Act & Assert
		expect(box1.left()).toEqual(12);
		expect(box1.right()).toEqual(41);
		expect(box1.top()).toEqual(9);
		expect(box1.bottom()).toEqual(23);
		expect(box1.topLeft().X).toEqual(12);
		expect(box1.topLeft().Y).toEqual(9);
		expect(box1.topRight().X).toEqual(41);
		expect(box1.topRight().Y).toEqual(9);
		expect(box1.bottomLeft().X).toEqual(12);
		expect(box1.bottomLeft().Y).toEqual(23);
		expect(box1.bottomRight().X).toEqual(41);
		expect(box1.bottomRight().Y).toEqual(23);

		expect(box2.left()).toEqual(22);
		expect(box2.right()).toEqual(50);
		expect(box2.top()).toEqual(12);
		expect(box2.bottom()).toEqual(19);
	});

	it("pixel in box", function () {
		// Arrange

		// Act & Assert
		expect(pixelInBox(box1.left(), box1.top(), box1)).toEqual(true); // Edge pixel should return true
		expect(pointInBox(box1.topLeft(), box1)).toEqual(true);

		expect(pixelInBox(box1.left(), box1.top(), box2)).toEqual(false);
		expect(pixelInBox(box1.right(), box1.top(), box2)).toEqual(false);
		expect(pixelInBox(box1.left(), box1.bottom(), box2)).toEqual(false);
		expect(pixelInBox(box1.right(), box1.bottom(), box2)).toEqual(false);

		expect(pixelInBox(box2.left(), box2.top(), box1)).toEqual(true);
		expect(pixelInBox(box2.right(), box2.top(), box1)).toEqual(false);
		expect(pixelInBox(box2.left(), box2.bottom(), box1)).toEqual(true);
		expect(pixelInBox(box2.right(), box2.bottom(), box1)).toEqual(false);
	});

	it("colision returns bool", function () {
		// Arrange

		// Act & Assert
		expect(testCollision_bool(box1, box2)).toEqual(true);
	});

	it("colision returns intersection box", function () {
		// Arrange

		// Act
		var intersection = testCollision_box(box1, box2);

		// Assert
		expect(intersection.X).toEqual(22);
		expect(intersection.Y).toEqual(12);
		expect(intersection.width).toEqual(20);
		expect(intersection.height).toEqual(8);
		expect(intersection.topLeft()).toEqual(box2.topLeft());
		expect(intersection.right()).toEqual(box1.right());
		expect(intersection.bottom()).toEqual(box2.bottom());
	});

	//describe("when song has been paused", function () {
	//	beforeEach(function () {
	//		player.play(song);
	//		player.pause();
	//	});

	//	it("should indicate that the song is currently paused", function () {
	//		expect(player.isPlaying).toBeFalsy();

	//		// demonstrates use of 'not' with a custom matcher
	//		expect(player).not.toBePlaying(song);
	//	});

	//	it("should be possible to resume", function () {
	//		player.resume();
	//		expect(player.isPlaying).toBeTruthy();
	//		expect(player.currentlyPlayingSong).toEqual(song);
	//	});
	//});

	//// demonstrates use of spies to intercept and test method calls
	//it("tells the current song if the user has made it a favorite", function () {
	//	spyOn(song, 'persistFavoriteStatus');

	//	player.play(song);
	//	player.makeFavorite();

	//	expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
	//});

	////demonstrates use of expected exceptions
	//describe("#resume", function () {
	//	it("should throw an exception if song is already playing", function () {
	//		player.play(song);

	//		expect(function () {
	//			player.resume();
	//		}).toThrowError("song is already playing");
	//	});
	//});
});
