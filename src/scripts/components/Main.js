class Main extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <main class="container main-container" id="mainContent"></main>
      `;
	}
}

customElements.define('main-component', Main);
