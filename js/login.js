// i8 OS v 1.1

// Power - Function

setTimeout(() => {
	$loginUserImg.classList.add("a03");
	$loginUserName.classList.add("a03");
}, 200);

// Login - Function

function loginBtn() {
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

// Login - Event Listener

$loginUserImg.addEventListener("click", () => {
	loginBtn();
});

$loginUserName.addEventListener("click", () => {
	loginBtn();
});
