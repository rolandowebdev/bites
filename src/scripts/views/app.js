import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
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
			document.body.innerHTML = '<h1>404 Not Found</h1>';
		}
	}
}

export default App;
