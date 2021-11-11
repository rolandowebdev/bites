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

		outlets.map((outlet) => {
			outletsContainer.innerHTML += listOutlet(outlet);
		});

		const choose = data['choose'];
		let dataChoose = '';

		choose.map((data) => {
			dataChoose += chooseBites(data);
		});

		document.querySelector('#choose').innerHTML = dataChoose;
	},
};

export default Favorite;
