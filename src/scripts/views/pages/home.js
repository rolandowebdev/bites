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
		const mostFood = document.querySelector('#most');
		const hamburger = document.querySelectorAll('.hamburger-menu span');
		const checkbox = document.querySelector('.hamburger-menu input');
		const linkOutlet = document.querySelector('.outlet-link');
		const linkFood = document.querySelector('.food-link');
		const arrowOutlet = document.querySelector('#fasOutlet');
		const arrowFood = document.querySelector('#fasFood');
		const outletWrapper = document.querySelector('#outlet');

		let dataChoose = '';
		let dataMostFood = '';
		outletWrapper.innerHTML = '';
		mostFood.innerHTML = '';

		if (window.location.href === 'http://localhost:8080/') {
			linkOutlet.style.display = 'block';
			document.querySelector('.outlet-container').style.marginTop = '1rem';
		}

		arrowAnimation(linkOutlet, arrowOutlet);
		arrowAnimation(linkFood, arrowFood);
		hamburgerAction(checkbox, hamburger);

		outlet.restaurants.slice(0, 6).map((outlet) => {
			outletWrapper.innerHTML += listOutlet(outlet);
		});

		data['most'].slice(0, 6).map((data) => {
			dataMostFood += mostFoodData(data);
		});

		data['choose'].map((data) => {
			dataChoose += chooseBites(data);
		});

		mostFood.innerHTML = dataMostFood;
		document.querySelector('#choose').innerHTML = dataChoose;
		loading.hide();
	},
};

export default Home;
