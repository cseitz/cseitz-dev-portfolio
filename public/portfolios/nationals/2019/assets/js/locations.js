// Included in locations.html

$(document).ready(function() {
	var mobileContents = $("#mobile-contents").first();
	var desktopContents = $("#desktop-contents").first();
	var mobileTemplate = $("#mobile-template").first()[0].innerHTML;
	var desktopTemplate = $("#desktop-template").first()[0].innerHTML;
	
	// Fetch events data
	var url = 'http://api.webdesigncontest.org:60606/events';
	url = "datasample"; // Incase if they take original API offline because contest is over.
	fetch(url)
	.then(function(response) {
		return response.json(); // Parse JSON
	})
	.then(function(data) {
		var htmM = "";
		var htmD = "";
		Object.values(data).forEach(dat => {
			var strM = mobileTemplate; // Get Mobile template string
			var strD = desktopTemplate; // Get Desktop template string
			Object.keys(dat).forEach(key => {
				strM = strM.replace("!" + key, dat[key]); // Do string replacement for Mobile
				strD = strD.replace("!" + key, dat[key]); // Do string replacement for Desktop/Tablet
			});
			htmM += strM; // Add the Mobile string
			htmD += strD; // Add the Desktop string
		});
		mobileContents[0].innerHTML = htmM; // Put Mobile contents into Mobile-contents element
		desktopContents[0].innerHTML = htmD; // Put Desktop contents into Desktop-contents element
		
	})
	.catch(function(error) {
		console.error(error);
	});
	
});







