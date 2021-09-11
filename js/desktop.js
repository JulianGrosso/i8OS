$desktopAll.addEventListener("click", () => {
	let notifMenuState = $notifMenu.classList.value;

	if (notifMenuState === "notification-menu unselect") {
		$notifMenu.classList.add("hidden");
	}
});
