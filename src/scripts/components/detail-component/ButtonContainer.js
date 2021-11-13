class ButtonContainer extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
         <div id="likeButtonContainer"></div>
      `;
	}
}

customElements.define('button-container', ButtonContainer);
