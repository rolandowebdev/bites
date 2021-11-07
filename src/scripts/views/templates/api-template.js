import CONFIG from '../../global/config';

const listRestaurant = (restaurant) => {
	return `
   <figure class="outlet-card">
      <img class="outlet-image" src="${
				CONFIG.BASE_IMAGE_URL + restaurant.pictureId
			}" alt="${restaurant.name}">
      <figcaption class="outlet-wrapper">
         <p class="outlet-name">${restaurant.name}</p>
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

export { listRestaurant };
