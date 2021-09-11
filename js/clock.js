function showTime() {
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	// let s = date.getSeconds();

	// var session = "AM";

	// if(h == 0){
	//     h = 12;
	// }

	// if(h > 12){
	//     h = h - 12;
	//     session = "PM";
	// }

	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	// s = (s < 10) ? "0" + s : s;

	let time = `${h}:${m}`;

	document.getElementById("clockTaskbar").innerText = time;
	document.getElementById("clockTaskbar").textContent = time;

	document.getElementById("clockNotifMenu").innerText = time;
	document.getElementById("clockNotifMenu").textContent = time;

	setTimeout(showTime, 1000);
}

showTime();
