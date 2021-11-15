const loading = {
	show() {
		document.getElementById('loading').style.display = 'block';
	},
	hide() {
		let fadeEffect = setInterval(() => {
			if (!document.getElementById('loading').style.opacity) {
				document.getElementById('loading').style.opacity = 1;
			}
			if (document.getElementById('loading').style.opacity > 0) {
				document.getElementById('loading').style.opacity -= 0.1;
			} else {
				clearInterval(fadeEffect);
				document.getElementById('loading').style.display = 'none';
			}
		}, 50);
	},
};

export default loading;
