class NotFound extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
         <div class="notfound-container" id="notfound-container">
         <img class="notfound-image" src="404.svg" alt="Not Found" />
            <h1 class="notfound-title">404 Not Found</h1>
            <p class="notfound-description">
            Please go to home route</p>
            <a href="/" aria-label="list-items">Go to the home</a>
         </div>
      `;
	}
}

customElements.define('not-found', NotFound);
