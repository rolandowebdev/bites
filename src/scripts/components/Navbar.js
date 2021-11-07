class Navbar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
   <header class="container">
      <a href="#mainContent" class="skip-link">Menuju ke konten</a>
         <nav class="navbar" id="navbar">
         <img class="logo" src="logo.svg" alt="Bites Logo" />
         <ul class="nav-list">
            <li class="nav-items">
               <a class="list-items active" href="/" aria-label="list-items"
                  >Home</a
               >
            </li>
            <li class="nav-items">
               <a class="list-items" href="#/food" aria-label="list-items"
                  >Food</a
               >
            </li>
            <li class="nav-items">
               <a class="list-items" href="#/outlet" aria-label="list-items"
                  >Outlet</a
               >
            </li>
            <li class="nav-items">
               <a class="list-items" href="#/favorite" aria-label="list-items"
                  >Favorite</a
               >
            </li>
            <li class="nav-items">
               <a class="list-items" href="#choose-section" aria-label="list-items"
                  >Why Choose</a
               >
            </li>
            <li class="nav-items">
               <a
                  class="list-items"
                  href="https://github.com/rolandopranata"
                  target="_blank"
                  aria-label="list-item"
                  rel="noreferrer"
                  >About Us</a
               >
            </li>
         </ul>
         <a href="#" class="hamburger-menu" id="hamburger">
            <input class="check" type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
         </a>
      </nav>
      <section class="hero" id="hero">
         <img class="hero-image" src="hero.jpg" alt="Heroes Image" />
         <h1 class="hero-title">We Serve The Taste You Love.</h1>
         <p class="hero-description">
            This is a type of restaurant which typically serves food and drinks. in addition to light refreshments such as baked goods or scanks. The term comes the rench word meaning food.
         </p>
      </section>
   </header>
      `;
	}
}

customElements.define('navbar-component', Navbar);
