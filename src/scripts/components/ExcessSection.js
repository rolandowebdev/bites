class Excess extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <section class="bites-excess">
         <div class="excess">
            <h2 class="excesss-number">01</h2>
            <p class="excess-title">Great Location</p>
            <p class="excess-description">
            Discover nature's best. Prime location, breathtaking views.
            </p>
         </div>
         <div class="excess">
            <h2 class="excesss-number">02</h2>
            <p class="excess-title">Natural Environment</p>
            <p class="excess-description">Discover a natural oasis. Prime location, breathtaking views.</p>
         </div>
         <div class="excess">
            <h2 class="excesss-number">03</h2>
            <p class="excess-title">Healthy Food</p>
            <p class="excess-description">Indulge in healthy dining. Prime location, breathtaking views.</p>
         </div>
      </section>
      `;
	}
}

customElements.define('excess-component', Excess);
