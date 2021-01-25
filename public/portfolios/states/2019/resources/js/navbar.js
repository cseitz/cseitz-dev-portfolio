var navBar;
var docBody;
var scrollTop;
var navHidden = false;
var setupNav = function() {
	if (!docBody) {
		navBar = document.getElementById("navBar");
		docBody = document.documentElement;
		scrollTop = docBody.scrollTop;
	}
};
var checkNavBar = function() {
	if (!docBody) {
		setupNav();
	}
	var lastScrollTop = scrollTop + 0;
	scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
	if (scrollTop <= 120) {
		navBar.classList.add("thick");
	}
	if (scrollTop > 50) {
		navBar.classList.remove("thick");
	}
}
window.addEventListener("scroll", checkNavBar);
window.addEventListener("resize", checkNavBar);
window.addEventListener("load", function() {
	setupNav();
	checkNavBar();
});