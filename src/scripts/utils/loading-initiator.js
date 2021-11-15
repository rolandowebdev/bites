const loading = {
	show() {
		document.querySelector('.loading').classList.add('loading-active');
	},
	hide() {
		document.querySelector('.loading').classList.remove('loading-active');
	},
};

export default loading;
