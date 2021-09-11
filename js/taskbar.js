$notifArea.addEventListener("click", () => {
	let notifMenuState = $notifMenu.classList.value;

	if (notifMenuState === "notification-menu unselect hidden") {
		$notifMenu.classList.remove("hidden");
	} else if (notifMenuState === "notification-menu unselect") {
		$notifMenu.classList.add("hidden");
	}
});

$startBtn.addEventListener("click", () => {
	let notifMenuState = $notifMenu.classList.value;

	if (notifMenuState === "notification-menu unselect") {
		$notifMenu.classList.add("hidden");
	}
});
