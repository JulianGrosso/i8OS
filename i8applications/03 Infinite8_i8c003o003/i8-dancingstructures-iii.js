// Infinity 8 - Dancing Structures III

let v1 = 90;
let v2 = Math.floor(Math.random() * (7 - 2) + 2);
let v3 = Math.floor(Math.random() * (5 - 2) + 2);
let v4 = Math.floor(Math.random() * (5 - 2) + 2);

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

	rotateX(frameCount / v4);

	rotateY(-frameCount / v3);

	noFill();

	let amount = 34;
	let velocity = 2;
	let distance = windowWidth / 6;
	let size = 5;
	let delay = v2;
	let shapeDegrees = v1;

	for (let i = 0; i <= amount; i++) {
		let r = map(sin(frameCount * 2), -1, 1, 100, 255);
		let g = map(cos(frameCount), -1, 1, 100, 150);
		let b = map(i, 0, 20, 0, 255);

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

/*

|	.   `/ydNNNNdy+.          .+ydNMMNmy+.   .	|
|	. `sNMMMNmmNNMMMd/`    `+dMMMNNmmNNMMMh. .	|
|	..mMMNs-`   ./yNMMmo`.oNMMNy/.`  `-sNMMN..	|
|	.dMMM:         .sNMMmNMMmo.         /MMMh.	|
|	.MMMm            :mMMMMm-            NMMN.	|
|	.dMMM:         .omMMmNMMmo.         +MMMy.	|
|	.-NMMNo-`  `-/hNMMm+`.oNMMNy/.   `:yMMMd..	|
|	. -hMMMNNmmNNMMMh/`    `+dMMMNNmmNMMMNo` .	|
|	.   .ohmNNNmds/.          .+ydNNNmds/`   .	|

  ___ _   _ _____ ___ _   _ ___ _______   __   ___  
 |_ _| \ | |  ___|_ _| \ | |_ _|_   _\ \ / /  ( _ ) 
  | ||  \| | |_   | ||  \| || |  | |  \ V /   / _ \ 
  | || |\  |  _|  | || |\  || |  | |   | |   | (_) |
 |___|_| \_|_|   |___|_| \_|___| |_|   |_|    \___/ 
                                                 
Dancing Structures III
SN: i8c003o003
21-09-2021

Made in Argentina with love

*/
