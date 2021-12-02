class FavoriteOutletSearchView {
	getTemplate() {
		return `
		<section class="outlet" id="outlet-section">
			<h2 class="section-title">Explore All Our <span class="line-style">Outlets</span></h2>
			<div class="search-container">
				<input class="search" type="text" id="query" placeholder="Search..." autocomplete="off">
			</div>
			<p class="link-container"><a class="outlet-link" href="#/outlet">See all<i id="fasOutlet" class="fas fa-arrow-right"></i></a></p>
			<div class="outlet-container" id="outlet">

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
		let html;

		if (outlet.length > 0) {
			html = outlet.reduce(
				(carry, outlet) =>
					carry.concat(
						`<figure class="outlet-card"><p class="outlet-name" id="outletName">${
							outlet.name || 'outlet not found'
						}</p></figure>`
					),
				''
			);
		} else {
			html = `<div class="notfound-container">Outlet Not Found</div>`;
		}

		document.querySelector('.outlet-container').innerHTML = html;

		document
			.getElementById('outlet-section')
			.dispatchEvent(new Event('outlet:searched:updated'));
	}
}

export default FavoriteOutletSearchView;
