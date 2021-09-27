// i8 OS v 1.1

// Apps Code

const app01 = {
	name: "Dancing Structures I",
	code: '<iframe src="./i8applications/01 Infinite8_i8c003o001/index.html" class="app-iframe" id="appIframe"></iframe>',
	id: "app01",
	iconImg: "./assets/img/user_i8OS.jpg",
};

const app02 = {
	name: "Dancing Structures II",
	code: '<iframe src="./i8applications/02 Infinite8_i8c003o002/index.html" class="app-iframe" id="appIframe"></iframe>',
	id: "app02",
	iconImg: "./assets/img/user_i8OS.jpg",
};

const app03 = {
	name: "Dancing Structures III",
	code: '<iframe src="./i8applications/03 Infinite8_i8c003o003/index.html" class="app-iframe" id="appIframe"></iframe>',
	id: "app03",
	iconImg: "./assets/img/user_i8OS.jpg",
};

const app04 = {
	name: "Dancing Structures IV",
	code: '<iframe src="./i8applications/04 Infinite8_i8c003o004/index.html" class="app-iframe" id="appIframe"></iframe>',
	id: "app04",
	iconImg: "./assets/img/user_i8OS.jpg",
};

const app05 = {
	name: "Dancing Structures V",
	code: '<iframe src="./i8applications/05 Infinite8_i8c003o005/index.html" class="app-iframe" id="appIframe"></iframe>',
	id: "app05",
	iconImg: "./assets/img/user_i8OS.jpg",
};

//----------------------------------------------------------------------------

// Create App Icons

function createAppIcon(app) {
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

createAppIcon(app01);
createAppIcon(app02);
createAppIcon(app03);
createAppIcon(app04);
createAppIcon(app05);

//----------------------------------------------------------------------------

// App Windows - Global Variables

let windowState = "close";
let appOpenNow = "";

// App Windows - Function

function startApp(iconId) {
	let appCode;

	if (iconId === "app01") {
		appCode = app01.code;
	} else if (iconId === "app02") {
		appCode = app02.code;
	} else if (iconId === "app03") {
		appCode = app03.code;
	} else if (iconId === "app04") {
		appCode = app04.code;
	} else if (iconId === "app05") {
		appCode = app05.code;
	}

	if (windowState === "close") {
		deployApp(appCode);
		openAppTaskbarIcon();

		getTitleWindow();

		windowState = "open";
		appOpenNow = iconId;
	}
}

function deployApp(appCode) {
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

function iconRestoreWindowApp(iconId) {
	if (windowState === "minimize" && appOpenNow === iconId) {
		restoreWindowApp();
		windowState = "open";
	}
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

	if (windowState === "close") {
		startApp(iconId);
	} else if (windowState === "minimize") {
		iconRestoreWindowApp(iconId);
	}
});
