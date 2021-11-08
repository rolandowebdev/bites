class DetailOutlet extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
         <div id="detail-restaurant"></div>
      `;
	}
}

customElements.define('detail-outlet', DetailOutlet);
