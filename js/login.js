// Power - Function

function powerBtn() {
	$powerScreen.classList.add("a05");
	setTimeout(() => {
		$powerScreen.classList.add("hidden");
		wallpaperStartup();

		audioStartup();

		setTimeout(() => {
			taskbarStartup();

			setTimeout(() => {
				appIconStartup();
			}, 400);
		}, 300);
	}, 350);
}

// Power - Event Listener

$powerBtn.addEventListener("click", () => {
	powerBtn();
});
