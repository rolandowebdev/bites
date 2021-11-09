class MenuDrink extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <div id="drinks" class="wrapper"><h2 class="menu-title">Drink Menu</h2></div>
      `;
	}
}

customElements.define('menu-drink', MenuDrink);
