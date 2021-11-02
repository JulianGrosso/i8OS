// i8 OS v 1.1

// App Taskbar Icon - Function

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

// Taskbar - Event Listener

$notifArea.addEventListener("click", () => {
	openCloseNotifMenu();
});

$startBtn.addEventListener("click", () => {
	closeNotifMenu();

	if (windowState === "open" || windowState === "openMax") {
		minimizeWindowApp();

		windowState = "minimize";
	}
});

$appTaskbarIcon.addEventListener("click", () => {
	if (windowState === "open" || windowState === "openMax") {
		minimizeWindowApp();

		windowState = "minimize";
	} else if (windowState === "minimize") {
		restoreWindowApp();

		windowState = "open";
	}
});
