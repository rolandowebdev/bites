import UrlParser from '../../routes/url-parser';
import SourceOutlet from '../../data/data-outlet';
import countIteration from '../../utils/form-validation';
import checkOnline from '../../utils/check-online';

import Swal from 'sweetalert2';
import {
	detailOutlet,
	foodMenu,
	drinkMenu,
	reviewOutlet,
} from '../templates/api-template';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailOutlets = {
	async render() {
		return `
		<div class="notfound-container" id="notfound">
			<img class="notfound-image" src="404.svg" alt="Not Found" />
			<h1 class="notfound-title">404 Not Found</h1>
			<p class="notfound-description">Failed to fetch data, please check your connection</p>
		</div>
		<detail-outlet></detail-outlet>
		<menu-food></menu-food>
		<menu-drink></menu-drink>
		<review-component></review-component>
		<button-container></button-container>
		<form-container></form-container>
      `;
	},

	async afterRender() {
		const detailOutletContainer = document.querySelector('#detail-outlet');
		const foodContainer = document.querySelector('#foods');
		const drinkContainer = document.querySelector('#drinks');
		const reviewContainer = document.querySelector('#review');

		const notFoundContainer = document.querySelector('#notfound');
		const formContainer = document.querySelector('#form-container');
		const reviewWrapper = document.querySelector('#reviews');

		const inputName = document.querySelector('#reviewName');
		const inputReview = document.querySelector('#reviewValue');
		const submit = document.querySelector('#submit');
		const inputMaxLengthOnLoad =
			document.getElementById('reviewName').maxLength;
		document.getElementById('countIteration').innerText = inputMaxLengthOnLoad;
		// const countInfo = document.getElementById('countInfo');

		try {
			const url = UrlParser.parseActiveUrlWithoutCombiner();
			const outlet = await SourceOutlet.detailOutlet(url.id);

			document.getElementById('reviewName').addEventListener('input', () => {
				const jumlahKarakterDiketik =
					document.getElementById('reviewName').value.length;
				const jumlahKarakterMaksimal =
					document.getElementById('reviewName').maxLength;

				const sisaKarakterUpdate =
					jumlahKarakterMaksimal - jumlahKarakterDiketik;
				document.getElementById('countIteration').innerText =
					sisaKarakterUpdate;
				document.getElementById('countInfo');

				countIteration(sisaKarakterUpdate, 'countIteration', 'countInfo');
			});

			document.getElementById('reviewName').addEventListener('focus', () => {
				document.getElementById('countInfo').style.visibility = 'inherit';
			});

			document.getElementById('reviewName').addEventListener('blur', () => {
				document.getElementById('countInfo').style.visibility = 'hidden';
			});

			submit.addEventListener('click', () => {
				const review = {
					id: url.id,
					name: inputName.value,
					review: inputReview.value,
				};

				if (window.navigator.onLine === true) {
					if (review.name === '' || review.review === '') {
						Swal.fire({
							title: 'All data must be filled!',
							text: 'Failed to send review feedback😒',
							icon: 'failed',
						});
					} else {
						Swal.fire({
							title: 'Successfully added review',
							text: 'Thank you for your feedback😄',
							icon: 'success',
						});
						SourceOutlet.postReview(review);
					}
				}
				checkOnline.status();
			});

			detailOutletContainer.innerHTML = detailOutlet(outlet.restaurant);

			outlet.restaurant.menus.foods.slice(0, 4).map((food) => {
				foodContainer.innerHTML += foodMenu(food);
			});

			outlet.restaurant.menus.drinks.slice(0, 4).map((drink) => {
				drinkContainer.innerHTML += drinkMenu(drink);
			});

			outlet.restaurant.customerReviews.map(
				(review) => (reviewContainer.innerHTML += reviewOutlet(review))
			);

			LikeButtonInitiator.init({
				likeButtonContainer: document.querySelector('#likeButtonContainer'),
				outlet: {
					id: outlet.restaurant.id,
					name: outlet.restaurant.name,
					pictureId: outlet.restaurant.pictureId,
					description: outlet.restaurant.description,
					rating: outlet.restaurant.rating,
					city: outlet.restaurant.city,
				},
			});
		} catch (err) {
			notFoundContainer.style.display = 'block';
			foodContainer.style.display = 'none';
			drinkContainer.style.display = 'none';
			reviewContainer.style.display = 'none';
			formContainer.style.display = 'none';
			reviewWrapper.style.display = 'none';
			detailOutletContainer.style.display = 'none';
		}
	},
};

export default DetailOutlets;
