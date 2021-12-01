import { itActsFavoriteOutlet } from './contract/favoriteOutletContract';

let favoriteOutletArray = [];

const FavoriteOutletArray = {
	getOutlet(id) {
		if (!id) return;
		return favoriteOutletArray.find((outlet) => outlet.id === id);
	},

	getAllOutlets() {
		return favoriteOutletArray;
	},

	putOutlet(outlet) {
		// If outlet not have id, return false
		if (!outlet.hasOwnProperty('id')) return;

		favoriteOutletArray.push(outlet);
	},

	deleteOutlet(id) {
		// delete outlet if outlet not have the same id equal to oulet.id using filter
		favoriteOutletArray = favoriteOutletArray.filter(
			(outlet) => outlet.id !== id
		);
	},
};

describe('Favorite Outlet Array Contract Test Implementation', () => {
	afterEach(() => (favoriteOutletArray = []));

	itActsFavoriteOutlet(FavoriteOutletArray);
});
