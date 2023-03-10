class Choose extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <section class="choose" id="choose-section">
         <h2 class="section-title">
            Why you choose <span class="line-style">Bites?</span>
         </h2>
         <div class="choose-container" id="choose">
            
         </div>
      </section>
      `;
	}
}

customElements.define('choose-component', Choose);
