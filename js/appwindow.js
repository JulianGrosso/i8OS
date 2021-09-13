function openApp() {
	let windowAppState = $appWindow.classList.value;

	if (windowAppState === "app-windows hidden") {
		$appWindow.classList.remove("hidden");
	}

	const appDeploy = document.createElement("div");
	appDeploy.classList.add("app-deploy");
	appDeploy.setAttribute("id", "appDeploy");

	appDeploy.innerHTML = `
			<iframe
				src="../apps/01_SineWave/index.html"
				class="app-iframe">
			</iframe>`;

	$appContainer.appendChild(appDeploy);
}

function closeApp() {
	let windowAppState = $appWindow.classList.value;

	if (windowAppState === "app-windows") {
		$appWindow.classList.add("hidden");
	}

	let appDeploy = document.getElementById("appDeploy");
	appDeploy.remove();
}

$closeWindow.addEventListener("click", () => {
	if (windowState === true) {
		closeApp();
		windowState = false;

		$appTaskbarIcon.classList.add("hidden");
	}
});
