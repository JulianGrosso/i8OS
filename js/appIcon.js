// App Icon - Function

function openAppTaskbarIcon() {
	$appTaskbarIcon.classList.remove("hidden");
	setTimeout(() => {
		$appTaskbarIcon.classList.add("a03");
	}, 80);
}

function closeAppTaskbarIcon() {
	$appTaskbarIcon.classList.remove("a03");
	setTimeout(() => {
		$appTaskbarIcon.classList.add("hidden");
	}, 400);
}

// App Icon - Event Listener

$appIcon01.addEventListener("click", () => {
	if (windowState === "close") {
		openApp(codeSineWave);
		openAppTaskbarIcon();

		getTitleWindow();

		windowState = "open";
	} else if (windowState === "minimize") {
		restoreWindowApp();

		windowState = "open";
	}
});
