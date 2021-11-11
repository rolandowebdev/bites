class FormContainer extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <div class="form-container">
         <form action="" method="POST">
            <label for="name">Name</label>
            <input type="text" name="name" id="reviewName"/>
            <label for="review">Review</label>
            <textarea id="reviewValue" name="review"></textarea>
            <input id="submit" type="submit" value="Submit"/>
         </form>
      </div>
      `;
	}
}

customElements.define('form-container', FormContainer);
