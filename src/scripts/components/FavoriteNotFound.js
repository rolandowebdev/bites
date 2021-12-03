class FavoriteNotFound extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
         <div class="notfound-container" id="notfound-container">
         <img class="notfound-image" src="404.jpg" alt="Not Found" />
            <h1 class="notfound-title">
            You haven't chosen your favorite outlet</h1>
            <p class="notfound-description">
            Please choose your favorite outlet on the outlet page</p>
         </div>
      `;
	}
}

customElements.define('favorite-notfound', FavoriteNotFound);
