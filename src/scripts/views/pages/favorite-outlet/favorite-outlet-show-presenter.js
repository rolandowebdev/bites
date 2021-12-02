class FavoriteOutletShowPresenter {
	constructor({ view, favoriteOutlet }) {
		this._view = view;
		this._favoriteOutlet = favoriteOutlet;

		this._showFavoriteOutlet();
	}

	async _showFavoriteOutlet() {
		const outlet = await this._favoriteOutlet.getAllOutlets();
		this._displayOutlet(outlet);
	}

	_displayOutlet(outlet) {
		this._view.showFavoriteOutlet(outlet);
	}
}

export default FavoriteOutletShowPresenter;
