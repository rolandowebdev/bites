import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './components/Footer';
import './components/Navbar';
import './components/Main';
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
