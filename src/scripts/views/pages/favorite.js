import FavoriteOutletDatabase from '../../data/favorite-outlet';
import { listOutlet } from '../templates/api-template';
import data from '../../json/BITES.json';
import { chooseBites } from '../templates/local-template';

const Favorite = {
	async render() {
		return `	
      <outlet-component></outlet-component>
		<choose-component></choose-component>
      `;
	},

	async afterRender() {
		const outlets = await FavoriteOutletDatabase.getAllOutlets();
		const outletsContainer = document.querySelector('#outlet');

		const choose = data['choose'];
		let dataChoose = '';

		choose.map((data) => {
			dataChoose += chooseBites(data);
		});

		if (outlets.length === 0) {
			outletsContainer.innerHTML = `Ooopsss...You Don't have favorite food`;
			document.querySelector('#choose').innerHTML = dataChoose;
		} else {
			outlets.map((outlet) => {
				outletsContainer.innerHTML += listOutlet(outlet);
			});
		}
	},
};

export default Favorite;
