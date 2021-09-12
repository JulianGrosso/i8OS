let windowState = false;

$appIcon01.addEventListener("click", () => {
	if (windowState === false) {
		openApp();
		windowState = true;
	}
});
