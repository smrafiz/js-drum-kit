var handler = {
	play: function(key, audio) {
		key.classList.add('playing');
		audio.currentTime = 0;
		audio.play();
	},

	playSound: function(e) {
		var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
		var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');

		if (!audio) {
			return;
		}

		handler.play(key, audio);
	},

	clickSound: function(e) {
		var keyCode = e.target.parentNode.getAttribute('data-key');
		var audio = document.querySelector('audio[data-key="' + keyCode + '"]');
		var key = document.querySelector('.key[data-key="' + keyCode + '"]');

		if (!audio) {
			return;
		}

		handler.play(key, audio);
	},

	removeClass: function(e) {
		if (e.propertyName !== 'transform') {
			return;
		}

		e.target.classList.remove('playing');
	}
};

var view = {
	init: function() {
		var keys = document.querySelectorAll('.key');
		keys.forEach(function(key) {
			key.addEventListener('transitionend', handler.removeClass);
		});

		window.addEventListener('keydown', handler.playSound);
		window.addEventListener('click', handler.clickSound);
	}
};

view.init();
