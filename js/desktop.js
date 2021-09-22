// Startup Functions

function wallpaperStartup() {
	$wallpaper.classList.remove("hidden");
	setTimeout(() => {
		$wallpaper.classList.add("a02");
	}, 20);
}

function appIconStartup() {
	$iconContainer.classList.add("a03");
}

function taskbarStartup() {
	$taskbar.classList.add("a04");
}

// Desktop - Event Listener

$desktopAll.addEventListener("click", () => {
	closeNotifMenu();
});
