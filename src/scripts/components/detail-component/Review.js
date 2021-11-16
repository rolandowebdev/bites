class Review extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
         <div class="reviews wrapper" id="reviews">
				<h2 class="reviews-title">Customer Reviews</h2>
				<div class="reviews-container" id="review"></div>
			</div>
      `;
	}
}

customElements.define('review-component', Review);
