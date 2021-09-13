// App Windows - Global Variables

let windowState = "close";

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

	removeTitleWindow();
}

function minimizeWindowApp() {
	let windowAppState = $appWindow.classList.value;

	if (windowAppState === "app-windows") {
		$appWindow.classList.add("hidden");
	}
}

function restoreWindowApp() {
	let windowAppState = $appWindow.classList.value;

	if (windowAppState === "app-windows hidden") {
		$appWindow.classList.remove("hidden");
	}
}

function getTitleWindow() {
	setTimeout(() => {
		let iframe = document.getElementById("appIframe");

		let iframeTitle = iframe.contentWindow.document.title;

		let windowTitle = `${iframeTitle}`;

		document.getElementById("windowTitle").innerText = windowTitle;
		document.getElementById("windowTitle").textContent = windowTitle;
	}, 200);
}

function removeTitleWindow() {
	document.getElementById("windowTitle").innerText = "";
	document.getElementById("windowTitle").textContent = "";
}

// App Windows - Event Listener

$closeWindowBtn.addEventListener("click", () => {
	if (windowState === "open") {
		closeApp();
		closeAppTaskbarIcon();

		windowState = "close";
	}
});

$minimizeWindowBtn.addEventListener("click", () => {
	if (windowState === "open") {
		minimizeWindowApp();

		windowState = "minimize";
	}
});
