class MenuFood extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<h2 class="menu-title">Food Menu</h2>
      <div id="foods" class="menu-container wrapper"></div>
      `;
	}
}

customElements.define('menu-food', MenuFood);
