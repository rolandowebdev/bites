import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteOutletDatabase from '../../src/scripts/data/favorite-outlet';

const createLikeButtonPresenterWithOutlet = async (outlet) => {
	await LikeButtonPresenter.init({
		likeButtonContainer: document.querySelector('#likeButtonContainer'),
		favoriteOutlet: FavoriteOutletDatabase,
		outlet,
	});
};

export { createLikeButtonPresenterWithOutlet };
