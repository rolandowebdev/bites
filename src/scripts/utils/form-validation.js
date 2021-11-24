function countIteration(count, iterator, notif) {
	if (count === 0) {
		document.getElementById(iterator).innerText = 'max';
	} else if (count <= 5) {
		document.getElementById(notif).style.color = 'red';
		document.getElementById(iterator).style.color = 'red';
	} else {
		document.getElementById(notif).style.color = '#AAA492';
		document.getElementById(iterator).style.color = '#AAA492';
	}
}

export default countIteration;
