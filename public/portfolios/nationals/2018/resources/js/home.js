/* Programmer's Note: "I like to use underscores in variable names just because it makes it easier for me." */


var _initWaveform = () => {
	/* Waveform Audio Player */
	
	var _wave = WaveSurfer.create({
		container: "#waveform",
	});
	
	// Wave Styling
	console.log(_wave.getWaveColor());
	//_wave.setWaveColor(["999"]);
	
	_wave.load("/resources/audio/songs/delta-bound.mp3");
	var _waveReady = false;
	_wave.on("ready", () => {
		_waveReady = true;
		_wave.setWaveColor("#ffa500");
		_wave.setHeight(100);
		//_wave.play();
	});
	_wave.on("finish", () => {
		document.getElementById("playPause").src = "/resources/images/play-button.png";
	});
	$("#playPause").click(() => {
		if (!_waveReady) {
			return false;
		};
		var _playing = _wave.isPlaying();
		if (_playing) {
			_wave.stop();
		} else {
			_wave.play();
		}
		document.getElementById("playPause").src = ((_playing) ? "/resources/images/play-button.png" : "resources/images/pause-button.png");
		
	});
	
}

$(document).ready(() => {
	_initWaveform();
});

