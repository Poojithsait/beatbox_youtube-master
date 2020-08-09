document.addEventListener('keydown', (event) => {
	console.log(event.keyCode);
	var key = event.keycode;
	if (key == 65) {
		var audio = new Audio("Piano Chord 208.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('65').style.backgroundcolor="aqua";
		document.getElementById('65').style.boxShadow = "0px 0px 20px 0px aqua";

		setTimeout(function()
		{document.getElementById('65').style.backgroundcolor ="transparent";

		},500)
	}
	if (key == 83) {
		var audio = new Audio("Piano Chord 209.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('83').style.backgroundcolor="aqua";
		document.getElementById('83').style.boxShadow = "0px 0px 20px 0px aqua";

		setTimeout(function()
		{document.getElementById('83').style.backgroundcolor ="transparent";

		},500)
	}if (key == 68) {
		var audio = new Audio("Drum Sticks Hit 3.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('68').style.backgroundcolor="aqua";
		document.getElementById('68').style.boxShadow = "0px 0px 20px 0px aqua";

		setTimeout(function()
		{document.getElementById('68').style.backgroundcolor ="transparent";

		},500)
	}if (key == 70) {
		var audio = new Audio("Cymbal Suspended 2.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('70').style.backgroundcolor="#ff00ff";
		document.getElementById('70').style.boxShadow = "0px 0px 20px 0px #ff00ff";

		setTimeout(function()
		{document.getElementById('70').style.backgroundcolor ="transparent";

		},500)
	}if (key == 67) {
		var audio = new Audio("Drum Snare Roll.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('67').style.backgroundcolor="#ff00ff";
		document.getElementById('67').style.boxShadow = "0px 0px 20px 0px #ff00ff";

		setTimeout(function()
		{document.getElementById('67').style.backgroundcolor ="transparent";

		},500)
	}if (key == 72) {
		var audio = new Audio("Piano Chord 331.mp3");
		audio.currentTime = 0;
		audio.play();document.getElementById('72').style.backgroundcolor="#ff00ff";
		document.getElementById('72').style.boxShadow = "0px 0px 20px 0px #ff00ff";

		setTimeout(function()
		{document.getElementById('72').style.backgroundcolor ="transparent";

		},500)
	}if (key == 71) {
		var audio = new Audio("PREL Musical 57.mp3");
		audio.currentTime = 0;
		audio.play();document.getElementById('71').style.backgroundcolor="#ff00ff";
		document.getElementById('71').style.boxShadow = "0px 0px 20px 0px #ff00ff";

		setTimeout(function()
		{document.getElementById('71').style.backgroundcolor ="transparent";

		},500)
	}if (key == 87) {
		var audio = new Audio("Musical Compos 33.mp3");
		audio.currentTime = 0;
		audio.play();document.getElementById('87').style.backgroundcolor="white";
		document.getElementById('87').style.boxShadow = "0px 0px 20px 0px white";

		setTimeout(function()
		{document.getElementById('87').style.backgroundcolor ="transparent";

		},500)
	}if (key == 75) {
		var audio = new Audio("Musical Orches 4.mp3");
		audio.currentTime = 0;
		audio.play();document.getElementById('75').style.backgroundcolor="white";
		document.getElementById('75').style.boxShadow = "0px 0px 20px 0px white";

		setTimeout(function()
		{document.getElementById('75').style.backgroundcolor ="transparent";

		},500)
	}
});