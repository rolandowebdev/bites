import SourceOutlet from '../../data/data-outlet';
import data from '../../json/BITES.json';
import loading from '../../utils/loading-initiator';
import { listOutlet } from '../templates/api-template';
import { chooseBites } from '../templates/local-template';

const Outlets = {
	async render() {
		return `
		<outlet-component></outlet-component>
		<choose-component></choose-component>
		<loading-component></loading-component>
      `;
	},

	async afterRender() {
		loading.show();
		const outlet = await SourceOutlet.allOutlet();
		const outletWrapper = document.querySelector('#outlet');

		outlet.restaurants.map((outlet) => {
			outletWrapper.innerHTML += listOutlet(outlet);
		});

		const choose = data['choose'];
		let dataChoose = '';

		choose.map((data) => {
			dataChoose += chooseBites(data);
		});

		document.querySelector('#choose').innerHTML = dataChoose;
		loading.hide();
	},
};

export default Outlets;
