import FavoriteOutletSearchView from '../src/scripts/views/pages/favorite-outlet/favorite-outlet-search-view';
import FavoriteOutletShowPresenter from '../src/scripts/views/pages/favorite-outlet/favorite-outlet-show-presenter';
import FavoriteOutletDatabase from '../src/scripts/data/favorite-outlet';

describe('Showing all favorite outlet', () => {
	let view;

	const renderTemplate = () => {
		view = new FavoriteOutletSearchView();
		document.body.innerHTML = view.getTemplate();
	};

	beforeEach(() => {
		renderTemplate();
	});

	describe('When no outlet have been liked', () => {
		it('should ask for the favorite outlet', () => {
			const favoriteOutlet = spyOnAllFunctions(FavoriteOutletDatabase);

			new FavoriteOutletShowPresenter({
				view,
				favoriteOutlet,
			});

			expect(favoriteOutlet.getAllOutlets).toHaveBeenCalledTimes(1);
		});

		it('should show the information that no outlet have been liked', (done) => {
			document
				.getElementById('outlet')
				.addEventListener('outlet:updated', () => {
					expect(document.querySelectorAll('.notfound').length).toEqual(1);

					done();
				});

			const favoriteOutlet = spyOnAllFunctions(FavoriteOutletDatabase);
			favoriteOutlet.getAllOutlets.and.returnValue([]);

			new FavoriteOutletShowPresenter({
				view,
				favoriteOutlet,
			});
		});
	});

	describe('When favorite outlet exist', () => {
		it('should show the outlet', (done) => {
			document
				.getElementById('outlet')
				.addEventListener('outlet:updated', () => {
					expect(document.querySelectorAll('.outlet-card').length).toEqual(2);
					done();
				});

			const favoriteOutlet = spyOnAllFunctions(FavoriteOutletDatabase);
			favoriteOutlet.getAllOutlets.and.returnValue([
				{
					id: 11,
					name: 'Outlet a',
				},
				{
					id: 22,
					name: 'Outlet b',
				},
			]);

			new FavoriteOutletShowPresenter({
				view,
				favoriteOutlet,
			});
		});
	});
});
