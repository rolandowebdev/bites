import Swal from 'sweetalert2/';
import SourceOutlet from '../data/data-outlet';

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

function handleInputFill(review) {
	if (review.name === '' || review.review === '') {
		Swal.fire({
			title: 'All data must be filled!',
			text: 'Failed to send review feedback😒',
		});
	} else {
		Swal.fire({
			title: 'Successfully added review',
			text: 'Thank you for your feedback😄',
		});
		SourceOutlet.postReview(review);
	}
}

export { countIteration, handleInputFill };
