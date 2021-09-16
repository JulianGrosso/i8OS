// Power - Function

setTimeout(() => {
	$poweri8OSText.classList.add("a03");
	$poweri8OS.classList.add("a03");
}, 200);

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
