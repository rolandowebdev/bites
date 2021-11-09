import 'regenerator-runtime';
import './components/Footer';
import './components/Navbar';
import './components/Main';
import './components/Hero';
import './components/AllFood';
import './components/MostFood';
import './components/Choose';
import './components/Outlet';
import './components/detail-component/MenuFood';
import './components/detail-component/MenuDrink';
import './components/detail-component/DetailOutlet';
import './components/detail-component/Review';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/detail-styles.css';
import './views/pages/home';
import './utils/hide-drawer';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
	button: document.querySelector('#hamburger'),
	drawer: document.querySelector('#navbar ul'),
	content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
	app.renderPage();
});

window.addEventListener('load', () => {
	app.renderPage();
	swRegister();
});

window.addEventListener('scroll', function (e) {
	var nav = document.getElementById('navbar');
	if (document.documentElement.scrollTop || document.body.scrollTop) {
		nav.classList.add('nav-colored');
		nav.classList.remove('nav-transparent');
	} else {
		nav.classList.add('nav-transparent');
		nav.classList.remove('nav-colored');
	}
});
