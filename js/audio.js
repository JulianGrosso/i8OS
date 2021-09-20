// DOM elements - Audios

const $audioStartup = document.getElementById("audioI8Startup");
$audioStartup.volume = 0.3;

const $audioSlide01 = document.getElementById("audioI8Slide01");
$audioSlide01.volume = 0.1;

const $audioSlide02 = document.getElementById("audioI8Slide02");
$audioSlide02.volume = 0.1;

// Audio Triggers

function audioStartup() {
	$audioStartup.currentTime = 0;
	$audioStartup.play();
}

function audioSlide01() {
	$audioSlide01.currentTime = 0;
	$audioSlide01.play();
}

function audioSlide02() {
	$audioSlide02.currentTime = 0;
	$audioSlide02.play();
}
