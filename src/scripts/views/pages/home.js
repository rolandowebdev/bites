import data from '../../json/BITES.json';
import {
	mostFoodData,
	allFoodData,
	chooseBites,
} from '../templates/local-template';

const Home = {
	render() {
		return `
		<hero-component></hero-component>
		<most-food></most-food>
		<all-food></all-food>
		<choose-component></choose-component>
      `;
	},

	afterRender() {
		const mostFood = data['most'];
		const choose = data['choose'];
		const allFood = data['all'];

		let dataChoose = '';
		let dataMostFood = '';
		let dataAllFood = '';

		allFood.forEach((data) => {
			dataAllFood += allFoodData(data);
		});

		mostFood.forEach((data) => {
			dataMostFood += mostFoodData(data);
		});

		choose.forEach((data) => {
			dataChoose += chooseBites(data);
		});

		document.querySelector('#all').innerHTML = dataAllFood;
		document.querySelector('#most').innerHTML = dataMostFood;
		document.querySelector('#choose').innerHTML = dataChoose;
	},
};

export default Home;

// function looping data using
