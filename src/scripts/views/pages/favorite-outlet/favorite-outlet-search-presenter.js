class FavoriteOutletSearchPresenter {
	constructor({ favoriteOutlet, view }) {
		this._view = view;
		this._listenToSearchRequestByUser();
		this._favoriteOutlet = favoriteOutlet;
	}

	_listenToSearchRequestByUser() {
		this._view.runWhenUserIsSearching((latestQuery) => {
			this._searchOutlet(latestQuery);
		});
	}

	async _searchOutlet(latestQuery) {
		this._latestQuery = latestQuery.trim();

		let foundOutlet;

		if (this.latestQuery.length > 0) {
			foundOutlet = await this._favoriteOutlet.searchOutlet(this.latestQuery);
		} else {
			foundOutlet = await this._favoriteOutlet.getAllOutlets();
		}

		this._showFoundOutlet(foundOutlet);
	}

	_showFoundOutlet(outlet) {
		this._view.showFavoriteOutlet(outlet);
	}

	get latestQuery() {
		return this._latestQuery;
	}
}

export default FavoriteOutletSearchPresenter;
