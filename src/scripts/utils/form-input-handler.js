import countIteration from './form-validation';

function formInputHandler(input, countInfo, iteration) {
	document.getElementById(input).addEventListener('input', () => {
		const jumlahKarakterDiketik = document.getElementById(input).value.length;
		const jumlahKarakterMaksimal = document.getElementById(input).maxLength;
		const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;

		document.getElementById(iteration).innerText = sisaKarakterUpdate;
		countIteration(sisaKarakterUpdate, iteration, countInfo);
	});

	document.getElementById(input).addEventListener('focus', () => {
		document.getElementById(countInfo).style.visibility = 'inherit';
	});

	document.getElementById(input).addEventListener('blur', () => {
		document.getElementById(countInfo).style.visibility = 'hidden';
	});
}

export default formInputHandler;
