import SourceOutlet from '../../data/data-outlet';
import data from '../../json/BITES.json';
import { listRestaurant } from '../templates/api-template';
import { chooseBites } from '../templates/local-template';

const Outlets = {
	async render() {
		return `
		<section class="outlet" id="outlet-section">
			<h2 class="section-title">Explore All Our <span class="line-style">Outlets</span></h2>
			<div class="outlet-container" id="outlet"></div>
   	</section>
		<section class="choose" id="choose-section">
			<h2 class="section-title">
				Why you choose <span class="line-style">Bites?</span>
			</h2>
			<div class="choose-container" id="choose"></div>
		</section>
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
