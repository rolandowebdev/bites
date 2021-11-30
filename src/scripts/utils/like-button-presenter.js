import FavoriteOutletDatabase from '../data/favorite-outlet';
import Swal from 'sweetalert2';
import {
	createLikeOuletTemplate,
	createUnlikeOuletTemplate,
} from '../views/templates/api-template';
import checkOnline from './check-online';

const LikeButtonInitiator = {
	async init({ likeButtonContainer, outlet }) {
		this._likeButtonContainer = likeButtonContainer;
		this._outlet = outlet;

		await this._renderButton();
	},

	async _renderButton() {
		const { id } = this._outlet;
		if (await this._isOutletExist(id)) {
			this._renderLiked();
		} else {
			this._renderLike();
		}
	},

	async _isOutletExist(id) {
		const outlet = await FavoriteOutletDatabase.getOutlet(id);
		return !!outlet;
	},

	_renderLike() {
		this._likeButtonContainer.innerHTML = createLikeOuletTemplate();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			if (window.navigator.onLine === true) {
				await FavoriteOutletDatabase.putOutlet(this._outlet);
				this._renderButton();
				Swal.fire({
					title: 'You have favorite outlet now!',
					text: 'Enjoy for all menu here😍',
					icon: 'success',
					confirmButtonText:
						'<a href="#/food"  style="text-decoration: none; color: #fff ;">Let\'s go see all menu</a>',
				});
			}
			checkOnline.status();
		});
	},

	_renderLiked() {
		this._likeButtonContainer.innerHTML = createUnlikeOuletTemplate();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			if (window.navigator.onLine === true) {
				await FavoriteOutletDatabase.deleteOutlet(this._outlet.id);
				this._renderButton();
				Swal.fire({
					title: 'You remove your favorite outlet!',
					text: 'Please come back later😥',
					icon: 'error',
				});
			}
			checkOnline.status();
		});
	},
};

export default LikeButtonInitiator;
