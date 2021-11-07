function renderData(data) {
	let dataHtml = '';
	data.forEach((data) => {
		dataHtml += data;
	});
	return dataHtml;
}

export default renderData;
