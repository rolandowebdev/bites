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
		const mostFood = data['most'];
		const choose = data['choose'];

		let dataChoose = '';
		let dataMostFood = '';

		outlet.restaurants.map((outlet) => {
			outletWrapper.innerHTML += listOutlet(outlet);
		});

		mostFood.map((data) => {
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
