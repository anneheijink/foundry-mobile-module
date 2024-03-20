console.log("loaded fullscreen script");
Hooks.once('ready', async function () {
	console.log("adding fullscreen button...");
	let settingsDiv = document.getElementById("settings-access");
	settingsDiv.insertAdjacentHTML('afterend', '<div id="foundry-mobile-module-toggle-fullscreen"><button data-action="fullscreen" id="foundry-mobile-module-btn-fullscreen"><i class="fas fa-maximize"></i>Toggle fullscreen</button></div>')
	let btn = document.getElementById("foundry-mobile-module-btn-fullscreen");
	btn.addEventListener('click', toggleFullScreen);
});

function toggleFullScreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
	} else if (document.exitFullscreen) {
		document.exitFullscreen();
	}
}
