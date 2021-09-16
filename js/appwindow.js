// App Windows - Global Variables

let windowState = "close";

// App Windows - Function

function openApp(appCode) {
	$appWindow.classList.remove("hidden");
	setTimeout(() => {
		$appWindow.classList.add("a03");
	}, 80);

	const appDeploy = document.createElement("div");
	appDeploy.classList.add("app-deploy");
	appDeploy.setAttribute("id", "appDeploy");

	appDeploy.innerHTML = appCode;

	$appContainer.appendChild(appDeploy);
}

function closeApp() {
	$appWindow.classList.remove("a03");
	setTimeout(() => {
		$appWindow.classList.add("hidden");
	}, 400);

	let appDeploy = document.getElementById("appDeploy");
	appDeploy.remove();

	removeTitleWindow();
}

function minimizeWindowApp() {
	$appWindow.classList.remove("a03");
	setTimeout(() => {
		$appWindow.classList.add("hidden");
	}, 400);
}

function restoreWindowApp() {
	$appWindow.classList.remove("hidden");
	setTimeout(() => {
		$appWindow.classList.add("a03");
	}, 50);
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
