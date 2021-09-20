// i8 Cursor

document.getElementsByTagName("body")[0].style.cursor =
	"url('../../assets/icons/i8OS-cursor.svg'), auto";

//--------------------------------------------------

// Infinity 8 - Dancing Structures I

let v1 = Math.floor(Math.random() * (140 - 120) + 120);
let v2 = Math.floor(Math.random() * (7 - 4) + 4);
let v3 = Math.floor(Math.random() * (9 - 2) + 2);
let v4 = Math.floor(Math.random() * (61 - 10) + 10);

//--------------------------------------------------

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);

	rotateX(v4);

	rotateY(frameCount / v3);

	noFill();

	let amount = 30;
	let velocity = 2.5;
	let distance = windowHeight / 3;
	let size = 6;
	let delay = v2;
	let shapeDegrees = v1;

	for (let i = 0; i <= amount; i++) {
		// rotate(frameCount / 150);

		let r = map(cos(frameCount), -1, 1, 100, 255);
		let g = map(sin(frameCount * 2), -1, 1, 50, 150);
		let b = map(i, 0, 20, 120, 255);

		stroke(r, g, b);

		beginShape();
		for (let j = 0; j < 360; j += shapeDegrees) {
			let rad = i * size;
			let x = rad * cos(j);
			let y = rad * sin(j);
			let z = sin(frameCount * velocity + i * delay) * distance;

			vertex(x, y, z);
		}
		endShape(CLOSE);
	}
}
