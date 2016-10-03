describe("collisionDetection", function () {
	//var player;
	//var song;

	//beforeEach(function () {
	//	player = new Player();
	//	song = new Song();
	//});

	// just to verifiy if jasmine is working ok
	it("1 + 1", function () {
		expect(1 + 1).toEqual(2);
	});

	it("basic box testing", function () {
		// Arrange
		var box1 = new Box(10, 5, 20, 10);

		// Act & Assert
		expect(box1.left()).toEqual(10);
		expect(box1.right()).toEqual(29);
		expect(box1.top()).toEqual(5);
		expect(box1.bottom()).toEqual(14);
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
