import { listOutlet } from '../../templates/api-template';
import { createSkeletonUi } from '../../templates/api-template';

class FavoriteOutletSearchView {
	getTemplate() {
		return `
		<section class="outlet" id="outlet-section">
         <h2 class="section-title">Your Favorite Outlets <span class="line-style">Here</span></h2>
         <div class="search-container">
				<input class="search" type="text" id="query" placeholder="Search..." autocomplete="off" required>
			</div>
			<p class="link-container"><a class="outlet-link" href="#/outlet">See all<i id="fasOutlet" class="fas fa-arrow-right"></i></a></p>
         <div class="outlet-container" id="outlet">
				${createSkeletonUi(20)}
			</div>
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

		outlet.length
			? (html = outlet.reduce(
					(carry, outlet) => carry.concat(listOutlet(outlet)),
					''
			  ))
			: (html = this._getEmptyOutletTemplate());

		document.querySelector('#outlet').innerHTML = html;

		if (outlet.length === 1) {
			document.querySelector('.outlet-image-wrapper').style.maxWidth = '40%';
			document.querySelector('.outlet-description').style.width = '40%';
		}

		document
			.querySelector('#outlet')
			.dispatchEvent(new Event('outlet:updated'));
	}

	_getEmptyOutletTemplate() {
		return `
		<div class="notfound-container notfound" id="notfound-container" style="display: initial">
			<img class="notfound-image" src="images/data.jpg" alt="Not Found" />
			<h1 class="notfound-title">The outlet you are looking for does not exist</h1>
			<p class="notfound-description">
			Search again and make sure your outlet name what you want
			</p>
	 	</div>
		`;
	}
}

export default FavoriteOutletSearchView;
