class NotFound extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
         <div class="notfound-container" id="notfound-container">
         <img class="notfound-image" src="404.svg" alt="Not Found" />
            <h1 class="notfound-title">404 Not Found</h1>
            <p class="notfound-description">Failed to fetch data, please check your connection</p>
         </div>
      `;
	}
}

customElements.define('not-found', NotFound);
