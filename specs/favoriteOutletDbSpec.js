import itActsFavoriteOutlet from './contract/favoriteOutletContract';
import FavoriteOutletDatabase from '../src/scripts/data/favorite-outlet';

describe('Favorite Outlet DB Contranct Test Implementation', () => {
	// Running deleteOutlet after test will be done.
	afterEach(async () => {
		(await FavoriteOutletDatabase.getAllOutlets()).forEach(async (outlet) => {
			await FavoriteOutletDatabase.deleteOutlet(outlet.id);
		});
	});

	// Call model test for FavoriteOutletDatabase after remove outlet from database.
	itActsFavoriteOutlet(FavoriteOutletDatabase);
});
