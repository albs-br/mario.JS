describe("collisionDetection", function () {
	var box1, box2;

	beforeEach(function () {
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

	it("colision returns overlapping box", function () {
		// Arrange

		// Act & Assert
		expect(testCollision_box(box1, box2).topLeft()).toEqual(box2.topLeft());
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
