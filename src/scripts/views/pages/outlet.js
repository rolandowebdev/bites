import SourceOutlet from '../../data/data-outlet';
import data from '../../json/BITES.json';
import { listRestaurant } from '../templates/api-template';
import { chooseBites } from '../templates/local-template';

const Outlets = {
	async render() {
		return `
		<outlet-component></outlet-component>
		<choose-component></choose-component>
      `;
	},

	async afterRender() {
		const outlet = await SourceOutlet.allOutlet();
		const restaurantContainer = document.querySelector('#outlet');
		outlet.restaurants.forEach((outlet) => {
			restaurantContainer.innerHTML += listRestaurant(outlet);
		});

		const choose = data['choose'];
		let dataChoose = '';

		choose.forEach((data) => {
			dataChoose += chooseBites(data);
		});

		document.querySelector('#choose').innerHTML = dataChoose;
	},
};

export default Outlets;
