// Desktop - Function

function wallpaperStartup() {
	$wallpaper.classList.add("a02");
}

setTimeout(() => {
	wallpaperStartup();
}, 400);

// Desktop - Event Listener

$desktopAll.addEventListener("click", () => {
	closeNotifMenu();
});
