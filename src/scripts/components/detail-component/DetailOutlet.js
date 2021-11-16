class DetailOutlet extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
         <div id="detail-outlet"></div>
      `;
	}
}

customElements.define('detail-outlet', DetailOutlet);
