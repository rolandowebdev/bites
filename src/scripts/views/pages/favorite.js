import FavoriteOutletDatabase from '../../data/favorite-outlet';
import { listOutlet } from '../templates/api-template';

const Favorite = {
	async render() {
		return `
      <outlet-component></outlet-component>
      `;
	},

	async afterRender() {
		const outlets = await FavoriteOutletDatabase.getAllOutlets();
		const outletsContainer = document.querySelector('#outlet');

		outlets.map((outlet) => {
			outletsContainer.innerHTML += listOutlet(outlet);
		});
	},
};

export default Favorite;
