class Box {
	constructor (x, y, width, height) {
		this.X = x;
		this.Y = y;
		this.width = width;
		this.height = height;
	}
	
	left() {
		return this.X;
	}

	right() {
		return this.X + this.width - 1;
	}

	top() {
		return this.Y;
	}
	
	bottom() {
		return this.Y + this.height - 1;
	}
}