

var _loadEvents = () => {
	fetch("http://api.webdesigncontest.org/events").then(function(_response) {
		return _response.json();
	}).then(function(_data) {
		console.table(_data);
		
		var _container = $("#events_section");
		
		var _template = function(_info) {
			/*return `
			
			<div class="event-row">
				<h1>` + _info.name + `</h1>
				<div class="date">` + _info.date + `</div>
				<div class="time">` + _info.time + `</div>
				<div class="address">` + _info.address.street + ". " + _info.address.city + ", " + _info.address.state_abbr + `</div>
			</div>
			<br>
			`;*/
			var _title = _info.name;
			var _date = _info.date;
			var _time = _info.time;
			var _address = _info.address.street + ". " + _info.address.city + ", " + _info.address.state_abbr;
			return `<table class="showMobile event-row">
	<tr>
		<td class="title"><h1>` + _title + `</h1></td>
	</tr>
	<tr>
		<td class="date">` + _date + `</td>
		<td class="time">` + _time + `</td>
	</tr>
	<tr>
		<td class="address">` + _address + `</td>
	</tr>
</table>

<table class="showTablet event-row">
	<tr>
		<td><h1>` + _title + `</h1></td>
		<td class="date">` + _date + `</td>
	</tr>
	<tr>
		<td class="address">` + _address + `</td>
		<td class="time">` + _time + `</td>
	</tr>
</table>

<table class="showDesktop event-row">
	<tr>
		<td><h1>` + _title + `</h1></td>
		<td class="date">` + _date + `</td>
	</tr>
	<tr>
		<td class="address">` + _address + `</td>
		<td class="time">` + _time + `</td>
	</tr>
</table>
<br>`;
		};
		
		var _str = "";
		for (_event of _data) {
			_str += _template(_event);
		}
		_container.html(_str);
		
	});
};



$(document).ready(() => {
	
	_loadEvents();
	
});



