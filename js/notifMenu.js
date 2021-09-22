// Notification Menu - Global Variables

// Notification Menu - Function

function openCloseNotifMenu() {
	let notifMenuState = $notifMenu.classList.value;

	if (notifMenuState === "notification-menu a01-base unselect hidden") {
		$notifMenu.classList.remove("hidden");
		audioSlide01();
		setTimeout(() => {
			$notifMenu.classList.add("a01");
		}, 100);
	} else if (notifMenuState === "notification-menu a01-base unselect a01") {
		audioSlide02();
		setTimeout(() => {
			$notifMenu.classList.remove("a01");
			setTimeout(() => {
				$notifMenu.classList.add("hidden");
			}, 300);
		}, 100);
	}
}

function closeNotifMenu() {
	let notifMenuState = $notifMenu.classList.value;

	if (notifMenuState === "notification-menu a01-base unselect a01") {
		audioSlide02();
		setTimeout(() => {
			$notifMenu.classList.remove("a01");
			setTimeout(() => {
				$notifMenu.classList.add("hidden");
			}, 200);
		}, 100);
	}
}

function changeWallpaper() {
	let wallpaperState = $wallpaper.classList.value;

	if (wallpaperState === "wallpaper a02-base wallpaper01 a02") {
		$wallpaper.classList.remove("a02");
		setTimeout(() => {
			$wallpaper.classList.remove("wallpaper01");
			$wallpaper.classList.add("wallpaper02");
			setTimeout(() => {
				$wallpaper.classList.add("a02");
			}, 100);
		}, 150);
	} else if (wallpaperState === "wallpaper a02-base wallpaper02 a02") {
		$wallpaper.classList.remove("a02");
		setTimeout(() => {
			$wallpaper.classList.remove("wallpaper02");
			$wallpaper.classList.add("wallpaper03");
			setTimeout(() => {
				$wallpaper.classList.add("a02");
			}, 100);
		}, 150);
	} else if (wallpaperState === "wallpaper a02-base wallpaper03 a02") {
		$wallpaper.classList.remove("a02");
		setTimeout(() => {
			$wallpaper.classList.remove("wallpaper03");
			$wallpaper.classList.add("wallpaper04");
			setTimeout(() => {
				$wallpaper.classList.add("a02");
			}, 100);
		}, 150);
	} else if (wallpaperState === "wallpaper a02-base wallpaper04 a02") {
		$wallpaper.classList.remove("a02");
		setTimeout(() => {
			$wallpaper.classList.remove("wallpaper04");
			$wallpaper.classList.add("wallpaper01");
			setTimeout(() => {
				$wallpaper.classList.add("a02");
			}, 100);
		}, 150);
	}
}

// Notification Menu - Event Listener

$wallpaperBtn.addEventListener("click", () => {
	changeWallpaper();
});
