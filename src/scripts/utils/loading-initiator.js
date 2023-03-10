const loading = {
	show() {
		document.getElementById('loading').style.display = 'block';
	},
	hide() {
		const fadeEffect = setInterval(() => {
			if (!document.getElementById('loading').style.opacity) {
				document.getElementById('loading').style.opacity = 1;
			}
			if (document.getElementById('loading').style.opacity > 0) {
				document.getElementById('loading').style.opacity -= 0.1;
			} else {
				clearInterval(fadeEffect);
				document.getElementById('loading').style.display = 'none';
			}
		});
	},
};

export default loading;
