// Infinity 8 - Dancing Structures V

let v1 = 60;
let v2 = Math.floor(Math.random() * (9 - 6) + 6);
let v3 = Math.floor(Math.random() * (3 - 1) + 1);
let v4 = Math.floor(Math.random() * (17 - 10) + 10);

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

	let amount = 40;
	let velocity = 2;
	let distance = (windowWidth + windowHeight) / 10;
	let size = (windowWidth + windowHeight) / (amount * 8);
	let delay = v2;
	let shapeDegrees = v1;

	for (let i = 0; i <= amount; i++) {
		let r = map(sin(frameCount * 2), -1, 1, 200, 255);
		let g = 160;
		let b = 40;

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
                                                 
Dancing Structures V
SN: i8c003o005
25-09-2021

Made in Argentina with love

*/
