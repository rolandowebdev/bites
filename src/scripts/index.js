import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/details.css';
import './components/Footer';
import './components/Navbar';
import './components/Main';
import './components/Hero';
import './components/AllFood';
import './components/MostFood';
import './components/Choose';
import './components/Outlet';
import './components/MenuFood';
import './components/MenuDrink';
import './components/DetailOutlet';
import './components/Review';
import './views/pages/home';
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
});
