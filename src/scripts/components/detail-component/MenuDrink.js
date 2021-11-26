class MenuDrink extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<div class="menu-section">
			<div id="drinks" class="menu-container"></div>
		</div>
      `;
	}
}

customElements.define('menu-drink', MenuDrink);
