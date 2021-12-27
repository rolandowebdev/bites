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
    const allFoodContainer = document.querySelector('#all');
    const hero = document.querySelector('#hero');
    const allFood = data['all'];
    const choose = data['choose'];

    hero.style.display = 'none';

    let dataAllFood = '';
    let dataChoose = '';
    allFoodContainer.innerHTML = '';

    allFood.map((food) => {
      dataAllFood += allFoodData(food);
    });

    choose.map((data) => {
      dataChoose += chooseBites(data);
    });

    allFoodContainer.innerHTML = dataAllFood;
    document.querySelector('#choose').innerHTML = dataChoose;
  },
};

export default Food;
