class FormContainer extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <div class="form-container" id="form-container">  
         <div class="name-input">
            <label for="name">Name</label>
            <input
               id="reviewName"
               type="text"
               name="name"
               placeholder="Name"
               maxlength="15"
               autocomplete="off"
            />
            <label class="count" id="countInfo" for="name">
            15/<span id="countIteration">15</span>
            </label>
         </div>
         <label for="review">Review</label>
         <textarea id="reviewDetail" name="review" placeholder="Review"></textarea>
         <button class="btn-form btn" id="submit">Submit</button>
      </div>
      `;
	}
}

customElements.define('form-container', FormContainer);
