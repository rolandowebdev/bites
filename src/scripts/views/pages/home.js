import data from '../../json/BITES.json';
import SourceOutlet from '../../data/data-outlet';
import loading from '../../utils/loading-initiator';
import { listOutlet } from '../templates/api-template';
import { mostFoodData, chooseBites } from '../templates/local-template';

const Home = {
	async render() {
		return `
		<loading-component></loading-component>
		<hero-component></hero-component>
		<excess-component></excess-component>
		<outlet-component></outlet-component>
		<most-food></most-food>
		<choose-component></choose-component>
      `;
	},

	async afterRender() {
		loading.show();
		const outlet = await SourceOutlet.allOutlet();
		const outletWrapper = document.querySelector('#outlet');
		const link = document.querySelector('.outlet-link');
		const checkbox = document.querySelector('.hamburger-menu input');
		const hamburger = document.querySelectorAll('.hamburger-menu span');
		const mostFood = data['most'];
		const choose = data['choose'];

		checkbox.addEventListener('change', (event) => {
			event.stopPropagation();
			hamburger.forEach((menus) => {
				const menu = menus;
				checkbox.checked === true
					? (menu.style.backgroundColor = '#fff')
					: (menu.style.backgroundColor = '#ff8303');
			});
		});

		let dataChoose = '';
		let dataMostFood = '';

		if (window.location.href === 'http://localhost:8080/') {
			link.style.display = 'block';
		}

		outlet.restaurants.slice(0, 4).map((outlet) => {
			outletWrapper.innerHTML += listOutlet(outlet);
		});

		mostFood.slice(0, 4).map((data) => {
			dataMostFood += mostFoodData(data);
		});

		choose.map((data) => {
			dataChoose += chooseBites(data);
		});

		document.querySelector('#most').innerHTML = dataMostFood;
		document.querySelector('#choose').innerHTML = dataChoose;
		loading.hide();
	},
};

export default Home;
