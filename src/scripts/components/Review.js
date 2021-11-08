class Review extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
         <div class="reviews" id="review"><h2 class="reviews-title">Customer Reviews</h2></div>
      `;
	}
}

customElements.define('review-component', Review);
