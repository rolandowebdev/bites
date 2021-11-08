import UrlParser from '../../routes/url-parser';
import SourceOutlet from '../../data/data-outlet';
import {
	detailRestaurant,
	foodMenu,
	drinkMenu,
	reviewRestaurant,
} from '../templates/api-template';

const DetailOutlets = {
	async render() {
		return `
		<detail-outlet></detail-outlet>
		<menu-food></menu-food>
		<menu-drink></menu-drink>
		<review-component></review-component>
      `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const outlet = await SourceOutlet.detailOutlet(url.id);
		const detailRestaurantContainer =
			document.querySelector('#detail-restaurant');
		detailRestaurantContainer.innerHTML = detailRestaurant(outlet.restaurant);

		const foodContainer = document.querySelector('#foods');
		const drinkContainer = document.querySelector('#drinks');
		const reviewContainer = document.querySelector('#review');

		const foodData = outlet.restaurant.menus.foods;
		const drinksData = outlet.restaurant.menus.drinks;
		const reviewData = outlet.restaurant.customerReviews;

		const limitDataFood = foodData.slice(0, 3);
		const limitDataDrink = drinksData.slice(0, 3);

		limitDataFood.forEach((food) => {
			foodContainer.innerHTML += foodMenu(food);
		});

		limitDataDrink.forEach((drink) => {
			drinkContainer.innerHTML += drinkMenu(drink);
		});

		reviewData.forEach((review) => {
			reviewContainer.innerHTML += reviewRestaurant(review);
		});
	},
};

export default DetailOutlets;
