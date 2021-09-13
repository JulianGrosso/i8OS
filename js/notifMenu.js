// Notification Menu - Global Variables

// Notification Menu - Function

function openCloseNotifMenu() {
	let notifMenuState = $notifMenu.classList.value;

	if (notifMenuState === "notification-menu unselect hidden") {
		$notifMenu.classList.remove("hidden");
	} else if (notifMenuState === "notification-menu unselect") {
		$notifMenu.classList.add("hidden");
	}
}

function closeNotifMenu() {
	let notifMenuState = $notifMenu.classList.value;

	if (notifMenuState === "notification-menu unselect") {
		$notifMenu.classList.add("hidden");
	}
}

function changeWallpaper() {
	let wallpaperState = $body.classList.value;

	if (wallpaperState === "wallpaper01") {
		$body.classList.remove("wallpaper01");
		$body.classList.add("wallpaper02");
	} else if (wallpaperState === "wallpaper02") {
		$body.classList.remove("wallpaper02");
		$body.classList.add("wallpaper03");
	} else if (wallpaperState === "wallpaper03") {
		$body.classList.remove("wallpaper03");
		$body.classList.add("wallpaper01");
	}
}

// Notification Menu - Event Listener

$wallpaperBtn.addEventListener("click", () => {
	changeWallpaper();
});
