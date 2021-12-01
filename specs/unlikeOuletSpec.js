import FavoriteOulet from '../src/scripts/data/favorite-outlet';
import * as TestFactory from './helpers/testFactory';

describe('Unlike a Favorite Oulet Category', () => {
	const addLikeAction = () => {
		document.body.innerHTML = '<div id="likeButtonContainer"></div>';
	};

	beforeEach(async () => {
		addLikeAction();
		await FavoriteOulet.putOutlet({ id: 1 });
	});

	// afterEach make for running removeLikeAction() every time when the test is run have been completed
	afterEach(async () => {
		await FavoriteOulet.deleteOutlet(1);
	});

	it('should display unlike widget when the outlet has been liked', async () => {
		await TestFactory.createLikeButtonPresenterWithOutlet({ id: 1 });

		expect(document.querySelector('[aria-label="unlike outlet"]')).toBeTruthy();
	});

	it('should not display like widget when the outlet has been liked', async () => {
		await TestFactory.createLikeButtonPresenterWithOutlet({ id: 1 });

		expect(document.querySelector('[aria-label="like outlet"]')).toBeFalsy();
	});

	it('should be able to remove liked outlet from the list', async () => {
		await TestFactory.createLikeButtonPresenterWithOutlet({ id: 1 });

		document
			.querySelector('[aria-label="unlike outlet"]')
			.dispatchEvent(new Event('click'));

		expect(await FavoriteOulet.getAllOutlets()).toEqual([]);
	});

	it('should not throw error if the unliked outlet is not in the favorite oulet', async () => {
		await TestFactory.createLikeButtonPresenterWithOutlet({ id: 1 });

		await FavoriteOulet.deleteOutlet(1);

		document
			.querySelector('[aria-label="unlike outlet"]')
			.dispatchEvent(new Event('click'));

		expect(await FavoriteOulet.getAllOutlets()).toEqual([]);
	});
});
