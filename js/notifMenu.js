// Notification Menu - Global Variables

// Notification Menu - Function

function openCloseNotifMenu() {
	let notifMenuState = $notifMenu.classList.value;

	if (notifMenuState === "notification-menu a01-base unselect hidden") {
		$notifMenu.classList.remove("hidden");
		setTimeout(() => {
			$notifMenu.classList.add("a01");
		}, 100);
	} else if (notifMenuState === "notification-menu a01-base unselect a01") {
		$notifMenu.classList.remove("a01");
		setTimeout(() => {
			$notifMenu.classList.add("hidden");
		}, 300);
	}
}

function closeNotifMenu() {
	let notifMenuState = $notifMenu.classList.value;

	if (notifMenuState === "notification-menu a01-base unselect a01") {
		$notifMenu.classList.remove("a01");
		setTimeout(() => {
			$notifMenu.classList.add("hidden");
		}, 200);
	}
}

function changeWallpaper() {
	let wallpaperState = $wallpaper.classList.value;

	if (wallpaperState === "desktop-all a02-base wallpaper01 a02") {
		$wallpaper.classList.remove("a02");
		setTimeout(() => {
			$wallpaper.classList.remove("wallpaper01");
			$wallpaper.classList.add("wallpaper02");
		}, 100);
		setTimeout(() => {
			$wallpaper.classList.add("a02");
		}, 150);
	} else if (wallpaperState === "desktop-all a02-base wallpaper02 a02") {
		$wallpaper.classList.remove("a02");
		setTimeout(() => {
			$wallpaper.classList.remove("wallpaper02");
			$wallpaper.classList.add("wallpaper03");
		}, 100);
		setTimeout(() => {
			$wallpaper.classList.add("a02");
		}, 150);
	} else if (wallpaperState === "desktop-all a02-base wallpaper03 a02") {
		$wallpaper.classList.remove("a02");
		setTimeout(() => {
			$wallpaper.classList.remove("wallpaper03");
			$wallpaper.classList.add("wallpaper01");
		}, 100);
		setTimeout(() => {
			$wallpaper.classList.add("a02");
		}, 150);
	}
}

// Notification Menu - Event Listener

$wallpaperBtn.addEventListener("click", () => {
	changeWallpaper();
});
