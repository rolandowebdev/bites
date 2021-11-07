import data from '../../json/BITES.json';
import {
	mostFoodData,
	allFoodData,
	chooseBites,
} from '../templates/local-template';

const Home = {
	render() {
		return `
      <section class="most-favorite" id="most-food">
        <h2 class="section-title">Most Ordered <span class="line-style">Food</span></h2>
        <div id="most" class="food"></div>
      </section>
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
