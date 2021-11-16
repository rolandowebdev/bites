import CONFIG from '../../global/config';

const listOutlet = (restaurant) => {
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

const detailOutlet = (outlet) => {
	return `
  <section class="detail-outlet-section wrapper">
   <h2 class="detail-outlet-name">${outlet.name}</h2>
   <p class="detail-outlet-location">${outlet.address} ${outlet.city}</p>
   <figure class="description-wrapper">
     <img class="detail-outlet-image" src="${
				CONFIG.BASE_IMAGE_URL + outlet.pictureId
			}" alt="${outlet.name}" />
     <figcaption class="description-content">
       <h3 class="about-title">About ${outlet.name}</h3>
       <p class="detail-outlet-description">
         ${outlet.description}
       </p>
       <p class="detail-outlet-category">
        ${outlet.categories.map((category) => category.name).join(' | ')}
       </p>
       <p class="detail-outlet-rating"> <img src="star.svg" alt="Star Icon"/> ${
					outlet.rating
				}</p>
     </figcaption>
   </figure>
  </section>
   `;
};

const foodMenu = (menu) => {
	return `
    <div class="menu-wrapper" id="foods">
      <img class="menu-icon" src="food.svg" alt="Food Menu"/>
      <p class="menu-list">${menu.name}</p>
    </div>
  `;
};

const drinkMenu = (menu) => {
	return `
    <div class="menu-wrapper" id="drinks">
      <img class="menu-icon" src="drink.svg" alt="Drink Menu"/>
      <p class="menu-list">${menu.name}</p>
    </div>
  `;
};

const reviewOutlet = (review) => {
	return `
    <div class="reviews-wrapper">
      <img class="user-profile" src="user.svg" alt="User Profile"/>
      <h3 class="reviews-name">${review.name}</h3>
      <p class="reviews-description">${review.review}</p>
      <p class="reviews-date">${review.date}</p>
    </div>
  `;
};

const createLikeButton = () => `
  <button aria-label="like button" id="likeButton" class="like-btn">
    <img class="like" src="heart-regular.svg" alt="Heart Regular" />
  </button>
  `;

const createLikedButton = () => `
  <button aria-label="unlike button" id="likeButton" class="like-btn">
    <img class="like" src="heart-solid.svg" alt="Heart Solid" />
  </button>
`;

export {
	listOutlet,
	detailOutlet,
	foodMenu,
	drinkMenu,
	reviewOutlet,
	createLikeButton,
	createLikedButton,
};
