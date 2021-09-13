// App Windows - Global Variables

let windowState = false;

// App Windows - Function

function openApp(appCode) {
	let windowAppState = $appWindow.classList.value;

	if (windowAppState === "app-windows hidden") {
		$appWindow.classList.remove("hidden");
	}

	const appDeploy = document.createElement("div");
	appDeploy.classList.add("app-deploy");
	appDeploy.setAttribute("id", "appDeploy");

	appDeploy.innerHTML = appCode;

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

// App Windows - Event Listener

$closeWindowBtn.addEventListener("click", () => {
	if (windowState === true) {
		closeApp();
		closeAppTaskbarIcon();

		windowState = false;
	}
});
