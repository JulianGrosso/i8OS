// Apps Code

const codeApp01 = `<iframe src="./apps/01_DancingStructures-I/index.html" class="app-iframe" id="appIframe"></iframe>`;

const codeApp02 = `<iframe src="./apps/02_FlowLines/index.html" class="app-iframe" id="appIframe"></iframe>`;

//----------------------------------------------------------------------------

// App Windows - Global Variables

let windowState = "close";

// App Windows - Function

function openApp(appCode) {
	$appWindow.classList.remove("hidden");
	setTimeout(() => {
		$appWindow.classList.add("a03");

		const appDeploy = document.createElement("div");
		appDeploy.classList.add("app-deploy");
		appDeploy.setAttribute("id", "appDeploy");

		appDeploy.innerHTML = appCode;

		$appContainer.appendChild(appDeploy);
	}, 100);
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

	closeNotifMenu();
}

function restoreWindowApp() {
	$appWindow.classList.remove("hidden");
	setTimeout(() => {
		$appWindow.classList.add("a03");
	}, 100);

	closeNotifMenu();
}

function getTitleWindow() {
	setTimeout(() => {
		let iframe = document.getElementById("appIframe");

		let iframeTitle = iframe.contentWindow.document.title;

		let windowTitle = `${iframeTitle}`;

		document.getElementById("windowTitle").innerText = windowTitle;
		document.getElementById("windowTitle").textContent = windowTitle;
	}, 800);
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

//----------------------------------------------------------------------------

/*

function newAppIcon(nameApp, id, iconSrc) {
	const appIcon = document.createElement("div");
	appIcon.classList.add("app-desktop-icon");
	appIcon.classList.add("unselect");
	appIcon.setAttribute("id", id);

	appIcon.innerHTML = `<img class="app-desktop-icon-img" src=${iconSrc}
							alt=${nameApp} />
							<p class="app-desktop-icon-name">${nameApp}</p>`;

	$iconsContainer.appendChild(appIcon);
}

newAppIcon("Dancing Structures I", "appIcon01", "./assets/img/user_i8OS.jpg");

*/
