import FavoriteOutletDatabase from '../../data/favorite-outlet';
import { listOutlet } from '../templates/api-template';
import data from '../../json/BITES.json';
import { chooseBites } from '../templates/local-template';

const Favorite = {
	async render() {
		return `	
      <outlet-component></outlet-component>
		<choose-component></choose-component>
		<favorite-notfound></favorite-notfound>
      `;
	},

	async afterRender() {
		const outlets = await FavoriteOutletDatabase.getAllOutlets();
		const outletsData = document.querySelector('#outlet');
		const outletContainer = document.querySelector('#outlet-section');
		const chooseContainer = document.querySelector('#choose-section');
		const notFoundContainer = document.querySelector('#notfound-container');

		const choose = data['choose'];
		let dataChoose = '';

		choose.map((data) => {
			dataChoose += chooseBites(data);
		});

		if (outlets.length === 0) {
			notFoundContainer.style.display = 'block';
			outletContainer.style.display = 'none';
			chooseContainer.style.display = 'none';
		} else {
			outlets.map((outlet) => {
				outletsData.innerHTML += listOutlet(outlet);
			});
			document.querySelector('#choose').innerHTML = dataChoose;
		}
	},
};

export default Favorite;
