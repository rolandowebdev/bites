class MostFood extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <section class="most-favorite" id="most-food">
         <h2 class="section-title">Most Ordered <span class="line-style">Food</span></h2>
         <div id="most" class="food"></div>
      </section>
      `;
	}
}

customElements.define('most-food', MostFood);
