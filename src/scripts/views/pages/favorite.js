import FavoriteOutletDatabase from '../../data/favorite-outlet';
import FavoriteOutletSearchView from './favorite-outlet/favorite-outlet-search-view';
import FavoriteOutletShowPresenter from './favorite-outlet/favorite-outlet-show-presenter';
import FavoriteOutletSearchPresenter from './favorite-outlet/favorite-outlet-search-presenter';
import data from '../../json/BITES.json';
import { chooseBites } from '../templates/local-template';

const view = new FavoriteOutletSearchView();

const Favorite = {
	async render() {
		return `
		${view.getTemplate()}
		<choose-component></choose-component>
		<favorite-notfound></favorite-notfound>
		`;
	},

	async afterRender() {
		const outlets = await FavoriteOutletDatabase.getAllOutlets();
		let dataChoose = '';

		data['choose'].map((data) => {
			dataChoose += chooseBites(data);
		});

		new FavoriteOutletShowPresenter({
			view,
			favoriteOutlet: FavoriteOutletDatabase,
		});

		new FavoriteOutletSearchPresenter({
			view,
			favoriteOutlet: FavoriteOutletDatabase,
		});

		if (outlets.length === 0) {
			document.querySelector('#notfound-container').style.display = 'block';
			document.querySelector('#outlet-section').style.display = 'none';
			document.querySelector('choose-component').style.display = 'none';
		} else {
			document.querySelector('#notfound-container').style.display = 'none';
			document.querySelector('#outlet-section').style.display = 'block';
			document.querySelector('#choose-section').style.display = 'block';
		}

		document.querySelector('#choose').innerHTML = dataChoose;
	},
};

export default Favorite;
