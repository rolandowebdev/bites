import { skeletonFood } from '../views/templates/local-template';

class AllFood extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <section class="all-food" id="all-food">
         <h2 class="section-title another-food">All Food For <span class="line-style">You</span></h2>
         <div id="all" class="food">
				${skeletonFood(6)}
			</div>
      </section>
      `;
	}
}

customElements.define('all-food', AllFood);
