// Apps Code

const codeApp01 = `<iframe src="./apps/01_DancingStructures-I/index.html" class="app-iframe" id="appIframe"></iframe>`;

const codeApp02 = `<iframe src="./apps/02_FlowLines/index.html" class="app-iframe" id="appIframe"></iframe>`;

//----------------------------------------------------------------------------

// App Icon - Function

function openAppTaskbarIcon() {
	$appTaskbarIcon.classList.remove("hidden");
	setTimeout(() => {
		$appTaskbarIcon.classList.add("a03");
	}, 80);
}

function closeAppTaskbarIcon() {
	$appTaskbarIcon.classList.remove("a03");
	setTimeout(() => {
		$appTaskbarIcon.classList.add("hidden");
	}, 400);
}

// App Icon - Event Listener

$appIcon01.addEventListener("click", () => {
	if (windowState === "close") {
		openApp(codeApp01);
		openAppTaskbarIcon();

		getTitleWindow();

		windowState = "open";
	} else if (windowState === "minimize") {
		restoreWindowApp();

		windowState = "open";
	}
});
