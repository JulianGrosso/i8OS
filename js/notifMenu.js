$wallpaperBtn.addEventListener("click", () => {
	let wallpaperState = $body.classList.value;

	if (wallpaperState === "wallpaper01") {
		$body.classList.remove("wallpaper01");
		$body.classList.add("wallpaper02");
	}

	if (wallpaperState === "wallpaper02") {
		$body.classList.remove("wallpaper02");
		$body.classList.add("wallpaper03");
	}

	if (wallpaperState === "wallpaper03") {
		$body.classList.remove("wallpaper03");
		$body.classList.add("wallpaper01");
	}
});
