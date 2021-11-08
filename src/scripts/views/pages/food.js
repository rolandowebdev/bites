import data from '../../json/BITES.json';
import { allFoodData, chooseBites } from '../templates/local-template';

const Food = {
	render() {
		return `
      <all-food></all-food>
		<choose-component></choose-component>
   `;
	},

	afterRender() {
		const allFood = data['all'];
		const choose = data['choose'];

		let dataAllFood = '';
		let dataChoose = '';

		allFood.forEach((food) => {
			dataAllFood += allFoodData(food);
		});

		choose.forEach((data) => {
			dataChoose += chooseBites(data);
		});

		document.querySelector('#all').innerHTML = dataAllFood;
		document.querySelector('#choose').innerHTML = dataChoose;
	},
};

export default Food;
