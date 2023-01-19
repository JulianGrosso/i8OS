// i8 OS v 1.2

// DOM elements - Audios

const $audioStartup = document.getElementById("audioI8Startup");
$audioStartup.volume = 0.3;

// Audio Triggers

function audioStartup() {
	$audioStartup.currentTime = 0;
	$audioStartup.play();
}
