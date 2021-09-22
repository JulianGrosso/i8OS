// Power - Function

setTimeout(() => {
	$loginUserImg.classList.add("a03");
	$loginUserName.classList.add("a03");
}, 200);

// Power - Function

function powerBtn() {
	$loginScreen.classList.add("a05");
	setTimeout(() => {
		$loginScreen.classList.add("hidden");
		wallpaperStartup();
		setTimeout(() => {
			taskbarStartup();

			audioStartup();

			setTimeout(() => {
				appIconStartup();
			}, 300);
		}, 100);
	}, 350);
}

// Power - Event Listener

$loginUserImg.addEventListener("click", () => {
	powerBtn();
});

$loginUserName.addEventListener("click", () => {
	powerBtn();
});
