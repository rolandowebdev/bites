import UrlParser from '../../routes/url-parser';
import SourceOutlet from '../../data/data-outlet';
import {
	detailOutlet,
	foodMenu,
	drinkMenu,
	reviewOutlet,
} from '../templates/api-template';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CONFIG from '../../global/config';

const DetailOutlets = {
	async render() {
		return `
		<detail-outlet></detail-outlet>
		<menu-food></menu-food>
		<menu-drink></menu-drink>
		<review-component></review-component>
		<div id="likeButtonContainer"></div>
      `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const outlet = await SourceOutlet.detailOutlet(url.id);

		const foodContainer = document.querySelector('#foods');
		const drinkContainer = document.querySelector('#drinks');
		const reviewContainer = document.querySelector('#review');
		const detailOutletContainer = document.querySelector('#detail-restaurant');
		detailOutletContainer.innerHTML = detailOutlet(outlet.restaurant);

		LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			outlet,
		});

		const foodData = outlet.restaurant.menus.foods;
		const drinksData = outlet.restaurant.menus.drinks;
		const reviewData = outlet.restaurant.customerReviews;

		const limitDataFood = foodData.slice(0, 3);
		const limitDataDrink = drinksData.slice(0, 3);

		limitDataFood.map((food) => {
			foodContainer.innerHTML += foodMenu(food);
		});

		limitDataDrink.map((drink) => {
			drinkContainer.innerHTML += drinkMenu(drink);
		});

		reviewData.map((review) => {
			reviewContainer.innerHTML += reviewOutlet(review);
		});
	},
};

export default DetailOutlets;
