class Outlet extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <section class="outlet" id="outlet-section">
         <h2 class="section-title">Explore All Our <span class="line-style">Outlets</span></h2>
         <div class="outlet-container" id="outlet"></div>
      </section>
      `;
	}
}

customElements.define('outlet-component', Outlet);
