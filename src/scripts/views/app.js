import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import NotFound from './pages/notfound';
import routes from '../routes/routes';

class App {
	constructor({ button, drawer, content }) {
		this._button = button;
		this._drawer = drawer;
		this._content = content;

		this._initialAppShell();
	}

	_initialAppShell() {
		DrawerInitiator.init({
			button: this._button,
			drawer: this._drawer,
			content: this._content,
		});
	}

	async renderPage() {
		const url = UrlParser.parseActiveUrlWithCombiner();
		const page = routes[url];
		try {
			this._content.innerHTML = await page.render();
			await page.afterRender();
			console.log(this._content.innerHTML);
		} catch (error) {
			document.body.innerHTML = `
				<div class="pagenotfound-container">
					<img class="page-notfound" src="page.jpg" alt="Page Not Found" />
					<a class="home-link" href="/">Go to the home</a>
					<p>Your route is undefined, please back to the home</p>
				</div>`;
		}
	}
}

export default App;
