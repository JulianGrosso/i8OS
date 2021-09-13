// Taskbar - Function

// Taskbar - Event Listener

$notifArea.addEventListener("click", () => {
	openCloseNotifMenu();
});

$startBtn.addEventListener("click", () => {
	closeNotifMenu();

	if (windowState === "open") {
		minimizeWindowApp();

		windowState = "minimize";
	}
});

$appTaskbarIcon.addEventListener("click", () => {
	if (windowState === "open") {
		minimizeWindowApp();

		windowState = "minimize";
	} else if (windowState === "minimize") {
		restoreWindowApp();

		windowState = "open";
	}
});
