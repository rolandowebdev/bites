import 'lazysizes';
import 'regenerator-runtime/runtime';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './components/Footer';
import './components/Navbar';
import './components/Main';
import './components/AllFood';
import './components/MostFood';
import './components/Choose';
import './components/Outlet';
import './components/FavoriteNotFound';
import './components/Loading';
import './components/ExcessSection';
import './components/detail-component/NotFound';
import './components/detail-component/Menu';
import './components/detail-component/DetailOutlet';
import './components/detail-component/Review';
import './components/detail-component/ButtonContainer';
import './components/detail-component/FormContainer';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import '../styles/loading.css';
import '../styles/skeleton.css';
import '../public/images/hero.jpg';
import './views/pages/home';
import hideDrawer from './utils/close-drawer';
import swRegister from './utils/sw-register';
import App from './views/app';

const menu = document.querySelectorAll('.list-items');
const drawer = document.querySelector('#navbar .nav-list');
const checkbox = document.querySelector('.hamburger-menu input');
const hamburger = document.querySelectorAll('.hamburger-menu span');
const nav = document.querySelector('#navbar');

const app = new App({
	button: document.querySelector('#hamburger'),
	drawer: document.querySelector('#navbar .nav-list'),
	content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
	app.renderPage();
});

window.addEventListener('load', () => {
	app.renderPage();
	swRegister();
});

window.addEventListener('scroll', (event) => {
	event.stopPropagation();
	if (document.documentElement.scrollTop || document.body.scrollTop) {
		nav.classList.add('nav-colored');
		nav.classList.remove('nav-transparent');
	} else {
		nav.classList.add('nav-transparent');
		nav.classList.remove('nav-colored');
	}
});

hideDrawer(menu, drawer, checkbox, hamburger);
