class Navbar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
         <header>
            <a href="#mainContent" class="skip-link" aria-label="Skip to content">Menuju ke konten</a>
            <div class="navbar-wrapper">
               <nav class="navbar" id="navbar">
                  <img class="logo" src="icons-set/logo.svg" alt="Bites Logo" />
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
                        <a
                           class="list-items"
                           href="https://github.com/rolandopranata"
                           target="_blank"
                           aria-label="list-item"
                           rel="noreferrer"
                           >About Us</a
                        >
                     </li>
                     <li class="account-wrapper">
                        <p><a class="social-media" href="https://www.instagram.com/rolandowebdev/" aria-label="Instagram rolandowebdev"><i class="fab fa-instagram fa-2x"></i></a></p>
                        <p><a class="social-media" href="https://github.com/rolandowebdev" aria-label="Github rolandowebdev"><i class="fab fa-github fa-2x"></i></a></p>
                        <p><a class="social-media" href="https://twitter.com/rolandowebdev" aria-label="Twitter rolandowebdev"><i class="fab fa-twitter fa-2x"></i></a></p>
                     </li>       
                  </ul>
                  <a href="#" class="hamburger-menu" id="hamburger" aria-label="Hamburger menu">
                     <label for="check">
                        <input id="check" class="check" type="checkbox" />
                     </label>
                     <span></span>
                     <span></span>
                     <span></span>
                  </a>
               </nav>
               </div>
               <div class="hero" id="hero">
                  <picture>
                     <source srcset="images/hero-small.jpg" media="(max-width: 600px)">
                     <img class="hero-image" src="images/hero-large.jpg" alt="Heroes Image" />
                  </picture>
                  <h1 class="hero-title">We Serve The Taste <br> You Love.</h1>
                  <p class="hero-description">
                     This is a type of restaurant which typically serves food and drinks. in addition to light refreshments such as baked goods or scanks. The term comes the rench word meaning food.
                  </p>
               </div>
         </header>
      `;
	}
}

customElements.define('navbar-component', Navbar);
