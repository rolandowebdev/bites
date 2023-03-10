class MenuContainer extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <div class="menu wrapper">
         <div class="list-menu-description">
            <h2 class="menu-title">Food & Drink Menu</h2>
            <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero unde cumque id sit atque neque at dolorum quae ea.</p>
            <a class="seeall-menu btn" href="#/food">See all menu</a>
         </div>
         <div class="menu-section">
			   <div id="foods" class="menu-container"></div>
		   </div>
         <div class="menu-section">
			   <div id="drinks" class="menu-container"></div>
		   </div>
      </div>
      `;
	}
}

customElements.define('menu-container', MenuContainer);
