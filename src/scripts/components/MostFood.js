class MostFood extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <section class="most-favorite" id="most-food">
         <h2 class="section-title">Most Ordered <span class="line-style">Food</span></h2>
			<p class="link-container"><a class="food-link" href="#/food">See all<i id="fasFood" class="fas fa-arrow-right"></i></a></p>
         <div id="most" class="food"></div>
      </section>
      `;
	}
}

customElements.define('most-food', MostFood);
