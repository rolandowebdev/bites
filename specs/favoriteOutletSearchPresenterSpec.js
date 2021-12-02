import FavoriteOutletSearchPresenter from '../src/scripts/views/pages/favorite-outlet/favorite-outlet-search-presenter';
import FavoriteOutletDatabase from '../src/scripts/data/favorite-outlet';
import FavoriteOutletSearchView from '../src/scripts/views/pages/favorite-outlet/favorite-outlet-search-view';

describe('Searching Outlet', () => {
	let presenter;
	let favoriteOutlet;
	let view;

	const searchOutlet = (query) => {
		const queryelement = document.getElementById('query');
		queryelement.value = query;
		queryelement.dispatchEvent(new Event('change'));
	};

	const setOutletSearchContainer = () => {
		view = new FavoriteOutletSearchView();
		document.body.innerHTML = view.getTemplate();
	};

	const constructPresenter = () => {
		favoriteOutlet = spyOnAllFunctions(FavoriteOutletDatabase);
		presenter = new FavoriteOutletSearchPresenter({
			favoriteOutlet,
			view,
		});
	};

	beforeEach(() => {
		setOutletSearchContainer();
		constructPresenter();
	});

	describe('When query is not empty', () => {
		it('should be able to capture the query typed by the user', () => {
			searchOutlet('outlet a');
			expect(presenter.latestQuery).toEqual('outlet a');
		});

		it('should ask the model to search for liked outlet', () => {
			searchOutlet('outlet a');
			expect(favoriteOutlet.searchOutlet).toHaveBeenCalledWith('outlet a');
		});

		it('should show outlet not found when the outlet returned does not contain a title', (done) => {
			document
				.getElementById('outlet')
				.addEventListener('outlet:updated', () => {
					const outletName = document.querySelectorAll('.outlet-name');
					expect(outletName.item(0).textContent).toEqual('outlet not found');

					done();
				});

			favoriteOutlet.searchOutlet
				.withArgs('outlet a')
				.and.returnValues([{ id: 33 }]);

			searchOutlet('outlet a');
		});

		it('should show the outlet found by Favorite Outlets', (done) => {
			document
				.getElementById('outlet')
				.addEventListener('outlet:updated', () => {
					expect(document.querySelectorAll('.outlet-name').length).toEqual(3);
					done();
				});

			favoriteOutlet.searchOutlet.withArgs('outlet a').and.returnValues([
				{ id: 111, name: 'outlet abc' },
				{ id: 222, name: 'outlet def' },
				{ id: 333, name: 'outlet ghi' },
			]);

			searchOutlet('outlet a');
		});

		it('should show the name of the outlet found be Favorite Outlet', (done) => {
			document
				.getElementById('outlet')
				.addEventListener('outlet:updated', () => {
					const outletTitles = document.querySelectorAll('.outlet-name');
					expect(outletTitles.item(0).textContent).toEqual('outlet abc');
					expect(outletTitles.item(1).textContent).toEqual('outlet def');
					expect(outletTitles.item(2).textContent).toEqual('outlet ghi');

					done();
				});

			favoriteOutlet.searchOutlet.withArgs('outlet a').and.returnValues([
				{ id: 111, name: 'outlet abc' },
				{ id: 222, name: 'outlet def' },
				{ id: 333, name: 'outlet ghi' },
			]);

			searchOutlet('outlet a');
		});
	});

	describe('When query is empty', () => {
		it('should capture the query as empty', () => {
			searchOutlet(' ');
			expect(presenter.latestQuery.length).toEqual(0);

			searchOutlet('		');
			expect(presenter.latestQuery.length).toEqual(0);

			searchOutlet('');
			expect(presenter.latestQuery.length).toEqual(0);

			searchOutlet('\t');
			expect(presenter.latestQuery.length).toEqual(0);
		});

		it('should show all favorite movies', () => {
			searchOutlet('    ');

			// Using toHaveBeenCalled for make sure getAllOutlets is callled
			expect(favoriteOutlet.getAllOutlets).toHaveBeenCalled();
		});
	});

	describe('When no favorite movies could be found', () => {
		it('should show the empty message', (done) => {
			document
				.getElementById('outlet')
				.addEventListener('outlet:updated', () => {
					expect(
						document.querySelectorAll('.notfound-container').length
					).toEqual(1);
					done();
				});
			favoriteOutlet.searchOutlet.withArgs('outlet a').and.returnValues([]);
			searchOutlet('outlet a');
		});

		it('should not show any outlet', (done) => {
			document
				.getElementById('outlet')
				.addEventListener('outlet:updated', () => {
					expect(document.querySelectorAll('.outlet-card').length).toEqual(0);
					done();
				});

			favoriteOutlet.searchOutlet.withArgs('outlet a').and.returnValues([]);

			searchOutlet('outlet a');
		});
	});
});
