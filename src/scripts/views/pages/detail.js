import UrlParser from '../../routes/url-parser';
import SourceOutlet from '../../data/data-outlet';
import { countIteration, handleInputFill } from '../../utils/form-validation';
import checkOnline from '../../utils/check-online';
import {
	detailOutlet,
	foodMenu,
	drinkMenu,
	reviewOutlet,
} from '../templates/api-template';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailOutlets = {
	async render() {
		return `
		<div class="notfound-container" id="notfound">
			<img class="notfound-image" src="404.svg" alt="Not Found" />
			<h1 class="notfound-title">404 Not Found</h1>
			<p class="notfound-description">Failed to fetch data, please check your connection</p>
		</div>
		<detail-outlet></detail-outlet>
		<div class="menu wrapper">
			<div class="list-menu-description">
				<h2 class="menu-title">Food & Drink Menu</h2>
				<p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero unde cumque id sit atque neque at dolorum quae ea.</p>
				<a class="seeall-menu btn" href="#/food">See all menu</a>
			</div>
			<menu-food></menu-food>
			<menu-drink></menu-drink>
		</div>
		<review-component></review-component>
		<button-container></button-container>
		<form-container></form-container>
      `;
	},

	async afterRender() {
		const detailOutletContainer = document.querySelector('#detail-outlet');
		const menuDescription = document.querySelector('.list-menu-description');
		const foodContainer = document.querySelector('#foods');
		const drinkContainer = document.querySelector('#drinks');
		const reviewContainer = document.querySelector('#review');

		const notFoundContainer = document.querySelector('#notfound');
		const formContainer = document.querySelector('#form-container');
		const reviewWrapper = document.querySelector('#reviews');

		const inputName = document.querySelector('#reviewName');
		const inputReview = document.querySelector('#reviewDetail');
		const submit = document.querySelector('#submit');
		const iteration = document.querySelector('#countIteration');
		const countInfo = document.querySelector('#countInfo');

		try {
			const url = UrlParser.parseActiveUrlWithoutCombiner();
			const outlet = await SourceOutlet.detailOutlet(url.id);

			inputName.addEventListener('input', () => {
				const jumlahKarakterDiketik = inputName.value.length;
				const jumlahKarakterMaksimal = inputName.maxLength;
				const sisaKarakterUpdate =
					jumlahKarakterMaksimal - jumlahKarakterDiketik;

				iteration.innerText = sisaKarakterUpdate;
				countIteration(sisaKarakterUpdate, 'countIteration', 'countInfo');
			});

			inputName.addEventListener('focus', () => {
				countInfo.style.visibility = 'inherit';
			});

			inputName.addEventListener('blur', () => {
				countInfo.style.visibility = 'hidden';
			});

			submit.addEventListener('click', () => {
				const review = {
					id: url.id,
					name: inputName.value,
					review: inputReview.value,
				};
				window.navigator.onLine === true
					? handleInputFill(review)
					: checkOnline.status();
			});

			detailOutletContainer.innerHTML = detailOutlet(outlet.restaurant);

			outlet.restaurant.menus.foods.slice(0, 4).map((food) => {
				foodContainer.innerHTML += foodMenu(food);
			});

			outlet.restaurant.menus.drinks.slice(0, 4).map((drink) => {
				drinkContainer.innerHTML += drinkMenu(drink);
			});

			outlet.restaurant.customerReviews.map(
				(review) => (reviewContainer.innerHTML += reviewOutlet(review))
			);

			LikeButtonInitiator.init({
				likeButtonContainer: document.querySelector('#likeButtonContainer'),
				outlet: {
					id: outlet.restaurant.id,
					name: outlet.restaurant.name,
					pictureId: outlet.restaurant.pictureId,
					description: outlet.restaurant.description,
					rating: outlet.restaurant.rating,
					city: outlet.restaurant.city,
				},
			});
		} catch (err) {
			notFoundContainer.style.display = 'block';
			foodContainer.style.display = 'none';
			drinkContainer.style.display = 'none';
			reviewContainer.style.display = 'none';
			formContainer.style.display = 'none';
			reviewWrapper.style.display = 'none';
			detailOutletContainer.style.display = 'none';
			menuDescription.style.display = 'none';
		}
	},
};

export default DetailOutlets;
