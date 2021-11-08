import CONFIG from '../../global/config';

const listRestaurant = (restaurant) => {
	return `
   <figure class="outlet-card">
      <img class="outlet-image" src="${
				CONFIG.BASE_IMAGE_URL + restaurant.pictureId
			}" alt="${restaurant.name}">
      <figcaption class="outlet-wrapper">
         <p class="outlet-name"><a href="${`/#/detail/${restaurant.id}`}">${
		restaurant.name
	}</a></p>
         <p class="outlet-location"><img class="location-icon" src="location.svg" alt="Location Icon">${
						restaurant.city
					}</p>
         <p class="outlet-description">${restaurant.description}</p>
         <p class="outlet-rating"><img class="star" src="star.svg" alt="Star Logo">${
						restaurant.rating
					}</p>
      </figcaption>
      <span class="location-badge"></span>
   </figure>
   `;
};

const detailRestaurant = (restaurant) => {
	return `
   <section class="restaurant-section wrapper">
   <h2 class="restaurant-name">${restaurant.name}</h2>
   <p class="restaurant-location">${restaurant.address} ${restaurant.city}</p>
   <figure class="description-wrapper">
     <img class="restaurant-image" src="${
				CONFIG.BASE_IMAGE_URL + restaurant.pictureId
			}" alt="${restaurant.name}" />
     <figcaption class="description-content">
       <h3 class="about-title">About ${restaurant.name}</h3>
       <p class="restaurant-description">
         ${restaurant.description}
       </p>
       <button class="favorite-restaurant">Favorite</button>
     </figcaption>
   </figure>
 </section>
   `;
};

const foodMenu = (menu) => {
	return `
  <section class="wrapper">
    <div class="menu-wrapper" id="foods">
      <p class="menu-list">${menu.name}</p>
    </div>
  </section>
  `;
};

const drinkMenu = (menu) => {
	return `
  <section class="wrapper">
    <div class="menu-wrapper" id="drinks">
      <p class="menu-list">${menu.name}</p>
    </div>
  </section>
  `;
};

const reviewRestaurant = (review) => {
	return `
  <section class="wrapper">
    <div class="reviews-wrapper">
      <h3 class="reviews-name">${review.name}</h3>
      <p class="reviews-description">${review.review}</p>
      <p class="reviews-date">${review.date}</p>
    </div>
  </section>
  `;
};

export {
	listRestaurant,
	detailRestaurant,
	foodMenu,
	drinkMenu,
	reviewRestaurant,
};
