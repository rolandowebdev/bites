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
		const mostFood = data['most'];
		const choose = data['choose'];

		let dataChoose = '';
		let dataMostFood = '';

		if (window.location.pathname === '/') {
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
