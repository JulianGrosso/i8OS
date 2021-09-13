// App Icon - Function

function openAppTaskbarIcon() {
	$appTaskbarIcon.classList.remove("hidden");
}

function closeAppTaskbarIcon() {
	$appTaskbarIcon.classList.add("hidden");
}

// App Icon - Event Listener

$appIcon01.addEventListener("click", () => {
	if (windowState === false) {
		openApp(codeSineWave);
		openAppTaskbarIcon();

		getTitleWindow();

		windowState = true;
	}
});
