

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && false ) {
	document.body.innerHTML += '<div id="nomobile"><div style="height: 100%; width: 100%; position: fixed; top: 0px; left: 0px; z-Index: 1000000; background-color: rgb(253, 184, 19); text-align: center; font-size: 5vw; color: white; font-family: segoeui; font-weight: 600;">' +
	'<div style="margin-left: 10vw; margin-right: 10vw;"><div style="margin-top: calc(20vh - 5vw);">This website is not indented to work on mobile.</div><br><div style="font-size: 3vw; font-weight: 400;">Most of its key features will not work on mobile and it is not a fair representation of the quality of the website.<br><br>If you would like to proceed, please double tap anywhere on screen.</div></div></div></div>';
	
	var nm = document.getElementById("nomobile"); 
	var lastClick = 0; 
	var cb = function() { 
		var cur = (new Date()).getTime(); 
		if ((cur - lastClick) <= (1.5 * 1000)) { 
			nm.innerHTML = "";
		} else { 
			lastClick = cur; 
		};
		console.log((cur - lastClick));
		alert("ok");
	};
	nm.addEventListener("click", cb);
	nm.addEventListener("touchstart", cb);
	nm.addEventListener("touchend", cb);
}
