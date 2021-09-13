// App Icon - Function

function openAppTaskbarIcon() {
	$appTaskbarIcon.classList.remove("hidden");
}

function closeAppTaskbarIcon() {
	$appTaskbarIcon.classList.add("hidden");
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
