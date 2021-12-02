import { listOutlet } from '../../templates/api-template';

class FavoriteOutletSearchView {
	getTemplate() {
		return `
		<section class="outlet" id="outlet-section">
         <h2 class="section-title">Explore All Our <span class="line-style">Outlets</span></h2>
         <div class="search-container">
				<input class="search" type="text" id="query" placeholder="Search..." autocomplete="off" required>
			</div>
			<p class="link-container"><a class="outlet-link" href="#/outlet">See all<i id="fasOutlet" class="fas fa-arrow-right"></i></a></p>
         <div class="outlet-container" id="outlet"></div>
      </section>
		`;
	}

	runWhenUserIsSearching(callback) {
		document.getElementById('query').addEventListener('change', (event) => {
			callback(event.target.value);
		});
	}

	showOutlet(outlet) {
		this.showFavoriteOutlet(outlet);
	}

	showFavoriteOutlet(outlet = []) {
		let html;

		if (outlet.length) {
			html = outlet.reduce(
				(carry, outlet) => carry.concat(listOutlet(outlet)),
				''
			);
		} else {
			html = this._getEmptyOutletTemplate();
		}

		document.querySelector('#outlet').innerHTML = html;

		document
			.querySelector('#outlet')
			.dispatchEvent(new Event('outlet:updated'));
	}

	_getEmptyOutletTemplate() {
		return `
		<div class="notfound-container" id="notfound-container">
		<img class="notfound-image" src="404.svg" alt="Not Found" />
			<h1 class="notfound-title">
			You haven't chosen your favorite outlet</h1>
			<p class="notfound-description">
			Please choose your favorite outlet on the outlet page</p>
		</div>
		`;
	}
}

export default FavoriteOutletSearchView;
