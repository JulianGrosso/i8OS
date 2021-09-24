// Infinity 8 - Dancing Structures II

let v1 = Math.floor(Math.random() * (61 - 45) + 45);
let v2 = Math.floor(Math.random() * (5 - 4) + 4);
let v3 = Math.floor(Math.random() * (9 - 2) + 2);
let v4 = Math.floor(Math.random() * (61 - 30) + 30);

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
	let distance = windowWidth / 5;
	let size = 6;
	let delay = v2;
	let shapeDegrees = v1;

	for (let i = 0; i <= amount; i++) {
		rotate(frameCount / 200);

		let r = map(sin(frameCount * 2), -1, 1, 50, 100);
		let g = map(i, 0, 20, 150, 255);
		let b = map(cos(frameCount), -1, 1, 150, 200);

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
                                                 
Dancing Structures II
SN: i8c003o002
21-09-2021

Made in Argentina with love

*/
