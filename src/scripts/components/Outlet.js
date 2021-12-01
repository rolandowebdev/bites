class Outlet extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <section class="outlet" id="outlet-section">
         <h2 class="section-title">Explore All Our <span class="line-style">Outlets</span></h2>
         <div class="search-container">
				<input class="search" type="text" id="search-input" placeholder="Search..." autocomplete="off">
			</div>
			<p class="link-container"><a class="outlet-link" href="#/outlet">See all<i id="fasOutlet" class="fas fa-arrow-right"></i></a></p>
         <div class="outlet-container" id="outlet"></div>
      </section>
      `;
	}
}

customElements.define('outlet-component', Outlet);
