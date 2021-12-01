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

		const choose = data['choose'];
		let dataChoose = '';

		choose.map((data) => {
			dataChoose += chooseBites(data);
		});

		outlets.map((outlet) => {
			outletsData.innerHTML += listOutlet(outlet);
		});
		document.querySelector('#choose').innerHTML = dataChoose;

		if (outlets.length === 0) {
			document.querySelector('#notfound-container').style.display = 'block';
			document.querySelector('#outlet-section').style.display = 'none';
			document.querySelector('#choose-section').style.display = 'none';
		} else {
			document.querySelector('#notfound-container').style.display = 'none';
			document.querySelector('#outlet-section').style.display = 'block';
			document.querySelector('#choose-section').style.display = 'block';
			outlets.length === 1
				? (document.querySelector('.outlet-image-wrapper').style.maxWidth =
						'40%') &&
				  (document.querySelector('.outlet-description').style.width = '40%')
				: '';
		}
	},
};

export default Favorite;
