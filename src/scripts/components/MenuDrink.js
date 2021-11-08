class MenuDrink extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <div id="drinks"><h2 class="menu-title">Drink Menu</h2></div>
      `;
	}
}

customElements.define('menu-drink', MenuDrink);
