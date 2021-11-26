class MenuFood extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<div class="menu-section">
			<div id="foods" class="menu-container"></div>
		</div>
      `;
	}
}

customElements.define('menu-food', MenuFood);
