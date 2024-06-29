window.addEventListener(
	'scroll', 
	function() {
		let scrollLabel = document.getElementById('app-label');
		let appIcon = document.getElementById('app-icon');
		let scrollOffset = 312;

		if (window.pageYOffset > scrollOffset) {
			// scrollLabel.style.visibility = 'visible';
			scrollLabel.style.opacity = 1;
			appIcon.style.opacity = 1;
		} else {
			// scrollLabel.style.visibility = 'hidden';
			scrollLabel.style.opacity = 0;
			appIcon.style.opacity = 0;
		}
	}
);
