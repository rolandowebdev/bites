class Footer extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <footer class="footer-container">
        <div class="footer-wrapper">
          <div class="footer-main">
            <img src="icons-set/logo.svg" alt="Logo Bites" />
            <p class="bites-description">
              Find your favorite food here and taste the <br /> unforgettable delicacy.
            </p>
          </div>
          <div class="footer-content">
            <h3 class="footer-title">Service</h3>
            <ul class="list-footer">
              <li class="footer-item">Online Order</li>
              <li class="footer-item">Pre-Reservation</li>
              <li class="footer-item">Dinner & Lunch</li>
            </ul>
          </div>
          <div class="footer-content">
            <h3 class="footer-title">Explore Us</h3>
            <ul class="list-footer">
              <li class="footer-item">Our Outlets</li>
              <li class="footer-item">Privacy</li>
              <li class="footer-item">Terms & Conditions</li>
            </ul>
          </div>
          <div class="footer-content">
            <h3 class="footer-title">Contact Us</h3>
            <ul class="list-footer">
              <li class="footer-item">Support @bites.id</li>
              <li class="footer-item">021-345-5675</li>
              <li class="footer-item">Bites. Bali,Indonesia</li>
            </ul>
          </div>
        </div>
        <p class="copyright">Copyrigth 2021 • All Rights Reserved • Bites</p>
      </footer>
      `;
	}
}

customElements.define('footer-component', Footer);
