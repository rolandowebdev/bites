class FormContainer extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <div class="form-container">
         <label for="name">Name</label>
         <input type="text" name="name" id="reviewName"/>
         <label for="review">Review</label>
         <textarea id="reviewValue" name="review"></textarea>
         <button id="submit">Submit</button>
      </div>
      `;
	}
}

customElements.define('form-container', FormContainer);
