/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import UrlParser from '../../routes/url-parser';
import SourceOutlet from '../../data/data-outlet';
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

		try {
			const url = UrlParser.parseActiveUrlWithoutCombiner();
			const outlet = await SourceOutlet.detailOutlet(url.id);

			const foodData = outlet.restaurant.menus.foods;
			const drinksData = outlet.restaurant.menus.drinks;
			const reviewData = outlet.restaurant.customerReviews;

			submit.addEventListener('click', () => {
				const review = {
					id: url.id,
					name: inputName.value,
					review: inputReview.value,
				};
				if (review.name === '' || review.review === '') {
					Swal.fire({
						title: 'All data must be filled!',
						text: 'Failed to send review feedback 😪',
						icon: 'failed',
					});
				} else {
					Swal.fire({
						title: 'Successfully added review',
						text: 'Thank you for your feedback😄',
						icon: 'success',
					});
					SourceOutlet.postReview(review);
					window.location.reload(2);
					return false;
				}
			});

			detailOutletContainer.innerHTML = detailOutlet(outlet.restaurant);

			foodData.slice(0, 5).map((food) => {
				foodContainer.innerHTML += foodMenu(food);
			});

			drinksData.slice(0, 5).map((drink) => {
				drinkContainer.innerHTML += drinkMenu(drink);
			});

			reviewData.map(
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
			console.log('Success');
		} catch (err) {
			notFoundContainer.style.display = 'block';
			foodContainer.style.display = 'none';
			drinkContainer.style.display = 'none';
			reviewContainer.style.display = 'none';
			formContainer.style.display = 'none';
			reviewWrapper.style.display = 'none';
			detailOutletContainer.style.display = 'none';
			console.log('Data Not Found');
		}
	},
};

export default DetailOutlets;
