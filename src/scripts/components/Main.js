class Main extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <main class="container" id="mainContent" tabindex="0">
		</main>
      `;
	}
}

customElements.define('main-component', Main);
