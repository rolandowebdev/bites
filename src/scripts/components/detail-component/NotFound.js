class NotFound extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <div class="notfound-container" id="notfound">
         <img class="notfound-image" src="images/404.jpg" alt="Not Found" />
         <h1 class="notfound-title">404 Not Found</h1>
         <p class="notfound-description">Failed to fetch data, please check your connection</p>
      </div>
      `;
	}
}

customElements.define('not-found', NotFound);
