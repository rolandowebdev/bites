class MenuDrink extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<div class="menu-section">
			<h2 class="menu-title">Drink Menu</h2>
			<div id="drinks" class="menu-container"></div>
		</div>
      `;
	}
}

customElements.define('menu-drink', MenuDrink);
