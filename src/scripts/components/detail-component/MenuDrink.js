class MenuDrink extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<h2 class="menu-title">Drink Menu</h2>
      <div id="drinks" class="menu-container wrapper"></div>
      `;
	}
}

customElements.define('menu-drink', MenuDrink);
