import 'regenerator-runtime/runtime';
import './components/Footer';
import './components/Navbar';
import './components/Main';
import './components/Hero';
import './components/AllFood';
import './components/MostFood';
import './components/Choose';
import './components/Outlet';
import './components/FavoriteNotFound';
import './components/Loading';
import './components/detail-component/MenuFood';
import './components/detail-component/MenuDrink';
import './components/detail-component/DetailOutlet';
import './components/detail-component/Review';
import './components/detail-component/ButtonContainer';
import './components/detail-component/FormContainer';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import '../styles/loading.css';
import './views/pages/home';
import maxLength from './utils/form-validation';
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

window.addEventListener('scroll', (e) => {
	var nav = document.getElementById('navbar');
	if (document.documentElement.scrollTop || document.body.scrollTop) {
		nav.classList.add('nav-colored');
		nav.classList.remove('nav-transparent');
	} else {
		nav.classList.add('nav-transparent');
		nav.classList.remove('nav-colored');
	}
});
