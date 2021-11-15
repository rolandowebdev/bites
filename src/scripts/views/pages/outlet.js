import SourceOutlet from '../../data/data-outlet';
import data from '../../json/BITES.json';
import loading from '../../utils/loading-initiator';
import { listOutlet } from '../templates/api-template';
import { chooseBites } from '../templates/local-template';

const Outlets = {
	async render() {
		return `
		<loading-component></loading-component>
		<outlet-component></outlet-component>
		<choose-component></choose-component>
		<div class="notfound-container" id="notfound-container">
         <img class="notfound-image" src="404.svg" alt="Not Found" />
			<h1 class="notfound-title">404 Not Found</h1>
			<p class="notfound-description">Failed to fetch data, please check your connection</p>
      </div>
      `;
	},

	async afterRender() {
		loading.show();
		const outlet = await SourceOutlet.allOutlet();
		const outletWrapper = document.querySelector('#outlet');
		const notFoundContainer = document.querySelector('#notfound-container');
		const outletContainer = document.querySelector('#outlet-section');
		const chooseContainer = document.querySelector('#choose-section');

		const error = {
			show() {
				notFoundContainer.style.display = 'block';
				outletContainer.style.display = 'none';
				chooseContainer.style.display = 'none';
			},

			hide() {
				notFoundContainer.style.display = 'none';
				outletContainer.style.display = 'block';
				chooseContainer.style.display = 'block';
			},
		};

		if (outlet.error !== false) {
			error.show();
		} else {
			error.hide();
		}

		outlet.restaurants.map((outlet) => {
			outletWrapper.innerHTML += listOutlet(outlet);
		});

		const choose = data['choose'];
		let dataChoose = '';

		choose.map((data) => {
			dataChoose += chooseBites(data);
		});

		document.querySelector('#choose').innerHTML = dataChoose;
		loading.hide();
	},
};

export default Outlets;
