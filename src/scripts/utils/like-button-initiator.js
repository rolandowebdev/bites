import FavoriteOutletDatabase from '../data/favorite-outlet';
import {
	createLikeButton,
	createLikedButton,
} from '../views/templates/api-template';

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
		this._likeButtonContainer.innerHTML = createLikeButton();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await FavoriteOutletDatabase.putOutlet(this._outlet);
			this._renderButton();
		});
	},

	_renderLiked() {
		this._likeButtonContainer.innerHTML = createLikedButton();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await FavoriteOutletDatabase.deleteOutlet(this._outlet.id);
			this._renderButton();
		});
	},
};

export default LikeButtonInitiator;
