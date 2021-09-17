// Startup Functions

function wallpaperStartup() {
	$wallpaper.classList.add("a02");
}

function appIconStartup() {
	$appIcon01.classList.add("a03");
}

function taskbarStartup() {
	$taskbar.classList.add("a04");
}

// setTimeout(() => {
// 	wallpaperStartup();

// 	setTimeout(() => {
// 		taskbarStartup();

// 		audioStartup();

// 		setTimeout(() => {
// 			appIconStartup();
// 		}, 400);
// 	}, 200);
// }, 800);

// Desktop - Event Listener

$desktopAll.addEventListener("click", () => {
	closeNotifMenu();
});
