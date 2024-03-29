class Loading extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <div class="loading overlay" id="loading">
         <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
      `;
	}
}

customElements.define('loading-component', Loading);
