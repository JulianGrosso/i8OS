// Apps Code

const app01 = {
	name: "Dancing Structures I",
	code: '<iframe src="./apps/01_DancingStructures-I/index.html" class="app-iframe" id="appIframe"></iframe>',
	id: "app01",
	iconImg: "./assets/img/user_i8OS.jpg",
};

const app02 = {
	name: "Flow Lines",
	code: '<iframe src="./apps/02_FlowLines/index.html" class="app-iframe" id="appIframe"></iframe>',
	id: "app02",
	iconImg: "./assets/img/user_i8OS.jpg",
};

//----------------------------------------------------------------------------

// Create App Icons

function newAppIcon(app) {
	let nameApp = app.name;
	let idApp = app.id;
	let iconImg = app.iconImg;

	const appIcon = document.createElement("div");
	appIcon.classList.add("app-desktop-icon", "unselect");
	appIcon.setAttribute("id", idApp);

	appIcon.innerHTML = `<img class="app-desktop-icon-img" src=${iconImg}
							alt=${nameApp} />
							<p class="app-desktop-icon-name">${nameApp}</p>`;

	$iconsContainer.appendChild(appIcon);
}

newAppIcon(app01);
newAppIcon(app02);

// App Windows - Global Variables

let windowState = "close";
let appOpenNow = "";

// App Windows - Function

function startApp(iconId) {
	let appCode;

	if (windowState === "close" && iconId === "app01") {
		appCode = app01.code;

		openApp(appCode);
		openAppTaskbarIcon();

		getTitleWindow();

		windowState = "open";
		appOpenNow = "App 01";
	} else if (
		windowState === "minimize" &&
		iconId === "app01" &&
		appOpenNow === "App 01"
	) {
		restoreWindowApp();

		windowState = "open";
	}

	if (windowState === "close" && iconId === "app02") {
		appCode = app02.code;

		openApp(appCode);
		openAppTaskbarIcon();

		getTitleWindow();

		windowState = "open";
		appOpenNow = "App 02";
	} else if (
		windowState === "minimize" &&
		iconId === "app02" &&
		appOpenNow === "App 02"
	) {
		restoreWindowApp();

		windowState = "open";
	}
}

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

	appOpenNow = "";
}

function minimizeWindowApp() {
	$appWindow.classList.remove("a03");
	setTimeout(() => {
		$appWindow.classList.add("hidden");
	}, 400);

	windowState = "minimize";

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

//----------------------------------------------------------------------------

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
	}
});

// App Icons - Event Listener

$iconsContainer.addEventListener("click", (e) => {
	let iconId = e.path[1].id;

	startApp(iconId);
});
