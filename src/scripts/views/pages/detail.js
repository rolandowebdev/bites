import UrlParser from '../../routes/url-parser';
import Swal from 'sweetalert2';
import SourceOutlet from '../../data/data-outlet';
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
		<detail-outlet></detail-outlet>
		<menu-food></menu-food>
		<menu-drink></menu-drink>
		<review-component></review-component>
		<button-container></button-container>
		<form-container></form-container>
      `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const outlet = await SourceOutlet.detailOutlet(url.id);

		const detailOutletContainer = document.querySelector('#detail-restaurant');
		const foodContainer = document.querySelector('#foods');
		const drinkContainer = document.querySelector('#drinks');
		const reviewContainer = document.querySelector('#review');

		const inputName = document.querySelector('#reviewName');
		const inputReview = document.querySelector('#reviewValue');
		const submit = document.querySelector('#submit');

		if (outlet.error === true) {
			return `<h1>Data Not Found</h1>`;
		} else {
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
						text: 'Failed to send review feedback :(',
						icon: 'failed',
					});
				} else {
					Swal.fire({
						title: 'Successfully added review',
						text: 'Thank you for your feedback!',
						icon: 'success',
					});
					SourceOutlet.postReview(review);
				}
			});

			detailOutletContainer.innerHTML = detailOutlet(outlet.restaurant);

			const limitDataFood = foodData.slice(0, 5);
			const limitDataDrink = drinksData.slice(0, 5);

			limitDataFood.map((food) => {
				foodContainer.innerHTML += foodMenu(food);
			});

			limitDataDrink.map((drink) => {
				drinkContainer.innerHTML += drinkMenu(drink);
			});

			reviewData.map((review) => {
				reviewContainer.innerHTML += reviewOutlet(review);
			});

			// post data method for review

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
		}
	},
};

export default DetailOutlets;
