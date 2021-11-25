class MenuFood extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<div class="menu-section">
			<h2 class="menu-title">Food Menu</h2>
			<div id="foods" class="menu-container"></div>
		</div>
      `;
	}
}

customElements.define('menu-food', MenuFood);
