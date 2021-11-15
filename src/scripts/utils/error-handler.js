const error = {
	show() {
		document.querySelector('#notfound-container').style.display = 'block';
		document.querySelector('#reviews').style.display = 'none';
		document.querySelector('#detail-restaurant').style.display = 'none';
		document.querySelector('#foods').style.display = 'none';
		document.querySelector('#drinks').style.display = 'none';
		document.querySelector('#form-container').style.display = 'none';
		document.querySelector('#likeButtonContainer').style.display = 'none';
	},

	hide() {
		document.querySelector('#notfound-container').style.display = 'none';
		document.querySelector('#reviews').style.display = 'block';
		document.querySelector('#detail-restaurant').style.display = 'block';
		document.querySelector('#foods').style.display = 'block';
		document.querySelector('#drinks').style.display = 'block';
		document.querySelector('#form-container').style.display = 'block';
		document.querySelector('#likeButtonContainer').style.display = 'block';
	},
};

export default error;
