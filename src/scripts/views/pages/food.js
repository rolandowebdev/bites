import data from '../../json/BITES.json';
import { allFoodData, chooseBites } from '../templates/local-template';

const Food = {
	render() {
		return `
      <section class="all-food" id="all-food">
			<h2 class="section-title">All Food For <span class="line-style">You</span></h2>
			<div id="all" class="food"></div>
    	</section>
      <section class="choose" id="choose-section">
			<h2 class="section-title">
				Why you choose <span class="line-style">Bites?</span>
			</h2>
			<div class="choose-container" id="choose"></div>
		</section>
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
