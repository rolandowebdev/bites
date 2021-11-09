import SourceOutlet from '../../data/data-outlet';
import data from '../../json/BITES.json';
import { listOutlet } from '../templates/api-template';
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
		const outletContainer = document.querySelector('#outlet');
		outlet.restaurants.forEach((outlet) => {
			outletContainer.innerHTML += listOutlet(outlet);
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
