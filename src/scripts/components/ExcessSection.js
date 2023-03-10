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
            <p class="excess-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis alias</p>
         </div>
         <div class="excess">
            <h2 class="excesss-number">02</h2>
            <p class="excess-title">Natural Environmen</p>
            <p class="excess-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis alias</p>
         </div>
         <div class="excess">
            <h2 class="excesss-number">03</h2>
            <p class="excess-title">Healthy Food</p>
            <p class="excess-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis alias</p>
         </div>
      </section>
      `;
	}
}

customElements.define('excess-component', Excess);
