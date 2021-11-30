import FavoriteOulet from '../src/scripts/data/favorite-outlet';
import * as TestFactory from './helpers/testFactory';

const addLikeAction = () => {
	document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Liking A Favorite Outlet Category', () => {
	// beforeEach make for running addLikeAction() every time when the test is run
	beforeEach(() => {
		addLikeAction();
	});

	it('should show the like outlet when the outlet has not been liked before', async () => {
		await TestFactory.createLikeButtonPresenter({ id: 1 });
		expect(document.querySelector('[aria-label="like outlet"]')).toBeTruthy();
	});

	it('should not show unlike outlet when outlet has not been liked before', async () => {
		await TestFactory.createLikeButtonPresenter({ id: 1 });
		expect(document.querySelector('[aria-label="unlike outlet"]')).toBeFalsy();
	});

	it('should be able to like oulet', async () => {
		await TestFactory.createLikeButtonPresenter({ id: 1 });
		document.querySelector('#likeButton').dispatchEvent(new Event('click'));
		const outlet = await FavoriteOulet.getOutlet(1);

		expect(outlet).toEqual({ id: 1 });
		FavoriteOulet.deleteOutlet(1);
	});

	it("should not add a outlet again when it's already liked", async () => {
		await TestFactory.createLikeButtonPresenter({ id: 1 });

		// get the outlet from favorite outlet
		await FavoriteOulet.putOutlet({ id: 1 });
		document.querySelector('#likeButton').dispatchEvent(new Event('click'));

		expect(await FavoriteOulet.getAllOutlets()).toEqual([{ id: 1 }]);
		FavoriteOulet.deleteOutlet(1);
	});

	it("should can't like oulet if oulet not have id", async () => {
		await TestFactory.createLikeButtonPresenter({});

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));
		expect(await FavoriteOulet.getAllOutlets()).toEqual([]);
	});
});
