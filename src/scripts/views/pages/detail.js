import UrlParser from '../../routes/url-parser';
import SourceOutlet from '../../data/data-outlet';
import FavoriteOutletDatabase from '../../data/favorite-outlet';
import checkOnline from '../../utils/check-online';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { countIteration, handleInputFill } from '../../utils/form-validation';
import {
	detailOutlet,
	foodMenu,
	drinkMenu,
	reviewOutlet,
} from '../templates/api-template';

const DetailOutlets = {
	async render() {
		return `
		<detail-outlet></detail-outlet>
		<menu-container></menu-container>
		<review-component></review-component>
		<button-container></button-container>
		<form-container></form-container>
		<not-found></not-found>
      `;
	},

	async afterRender() {
		const detailOutletContainer = document.querySelector('#detail-outlet');
		const foodContainer = document.querySelector('#foods');
		const drinkContainer = document.querySelector('#drinks');
		const reviewContainer = document.querySelector('#review');

		const hero = document.querySelector('#hero');
		const inputName = document.querySelector('#reviewName');
		const inputReview = document.querySelector('#reviewDetail');
		const submit = document.querySelector('#submit');
		const iteration = document.querySelector('#countIteration');
		const countInfo = document.querySelector('#countInfo');

		try {
			const url = UrlParser.parseActiveUrlWithoutCombiner();
			const outlet = await SourceOutlet.detailOutlet(url.id);

			hero.style.display = 'none';

			inputName.addEventListener('input', () => {
				const characterTyped = inputName.value.length;
				const maxCharacter = inputName.maxLength;
				const remainingCharacter = maxCharacter - characterTyped;

				iteration.innerText = remainingCharacter;
				countIteration(remainingCharacter, 'countIteration', 'countInfo');
			});

			inputName.addEventListener('focus', () => {
				countInfo.style.visibility = 'initial';
			});

			inputName.addEventListener('blur', () => {
				countInfo.style.visibility = 'hidden';
			});

			submit.addEventListener('click', () => {
				const review = {
					id: url.id,
					name: inputName.value,
					review: inputReview.value,
				};
				window.navigator.onLine === true
					? handleInputFill(review)
					: checkOnline.status();
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

			LikeButtonPresenter.init({
				likeButtonContainer: document.querySelector('#likeButtonContainer'),
				favoriteOutlet: FavoriteOutletDatabase,
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
			document.querySelector('#notfound').style.display = 'block';
			document.querySelector('.list-menu-description').style.display = 'none';
			document.querySelector('#form-container').style.display = 'none';
			document.querySelector('#reviews').style.display = 'none';
			hero.style.display = 'none';
			foodContainer.style.display = 'none';
			drinkContainer.style.display = 'none';
			reviewContainer.style.display = 'none';
			detailOutletContainer.style.display = 'none';
		}
	},
};

export default DetailOutlets;
