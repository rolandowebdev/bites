import data from '../../json/BITES.json';
import SourceOutlet from '../../data/data-outlet';
import loading from '../../utils/loading-initiator';
import arrowAnimation from '../../utils/arrow-animation';
import hamburgerAction from '../../utils/hamburger-action';
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
		const linkFood = document.querySelector('.food-link');
		const arrowFood = document.querySelector('.food-link .fas');
		const linkOutlet = document.querySelector('.outlet-link');
		const arrowOutlet = document.querySelector('.outlet-link .fas');
		const outletWrapper = document.querySelector('#outlet');
		const checkbox = document.querySelector('.hamburger-menu input');
		const hamburger = document.querySelectorAll('.hamburger-menu span');

		let dataChoose = '';
		let dataMostFood = '';

		arrowAnimation(linkFood, arrowFood);
		arrowAnimation(linkOutlet, arrowOutlet);
		hamburgerAction(checkbox, hamburger);

		if (window.location.href === 'http://localhost:8080/') {
			linkOutlet.style.display = 'block';
		}

		outlet.restaurants.slice(0, 6).map((outlet) => {
			outletWrapper.innerHTML += listOutlet(outlet);
		});

		data['most'].slice(0, 4).map((data) => {
			dataMostFood += mostFoodData(data);
		});

		data['choose'].map((data) => {
			dataChoose += chooseBites(data);
		});

		document.querySelector('#most').innerHTML = dataMostFood;
		document.querySelector('#choose').innerHTML = dataChoose;
		loading.hide();
	},
};

export default Home;
