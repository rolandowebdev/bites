import CONFIG from '../../global/config';

const listOutlet = (restaurant) => {
	return `
   <figure class="outlet-card">
      <img class="outlet-image" src="${
				CONFIG.BASE_IMAGE_URL + restaurant.pictureId
			}" alt="${restaurant.name}">
      <figcaption class="outlet-wrapper">
         <p class="outlet-name" id="ouletName"><a href="${`/#/detail/${restaurant.id}`}">${
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
     <div class="outlet-border">
      <img class="detail-outlet-image" src="${
				CONFIG.BASE_IMAGE_URL + outlet.pictureId
			}" alt="${outlet.name}" />
     </div>
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
      <div class="menu-card">
        <img class="menu-icon" src="https://images.unsplash.com/photo-1543826173-70651703c5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfDJ8MHxibGFja3w%3D&auto=format&fit=crop&w=500&q=60" alt="Food Menu"/>
        <div class="menu-list">
          <p class="menu-name">${menu.name}</p>
          <span class="menu-location"><img class="location-icon" src="location.svg" alt="Location Icon">Western food</span>
          <span class="menu-buy">
            <p class="menu-price">$4.3</p>
            <span class="chart-wrapper"><img class="chart-icon" src="chart.svg" alt="Chart Icon"/></span>
          </span>
        </div>
      </div>
    </div>
  `;
};

const drinkMenu = (menu) => {
	return `
    <div class="menu-wrapper" id="drinks">
      <div class="menu-card">
        <img class="menu-icon" src="https://images.unsplash.com/photo-1616360151857-3914da25dbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGRyaW5rcyUyMGJvdHRsZXxlbnwwfDJ8MHxibGFja3w%3D&auto=format&fit=crop&w=500&q=60" alt="Drink Menu"/>
        <div class="menu-list">
          <p class="menu-name">${menu.name}</p>
          <span class="menu-location"><img class="location-icon" src="location.svg" alt="Location Icon">Indonesian food</span>
          <span class="menu-buy">
            <p class="menu-price">$4.3</p>
            <span class="chart-wrapper"><img class="chart-icon" src="chart.svg" alt="Chart Icon"/></span>
          </span>
        </div>
      </div>
    </div>
  `;
};

const reviewOutlet = (review) => {
	return `
    <div class="review-card">
        <div class="desc"><p class="review-text">${review.review}</p></div>
        <div class="profile">
          <img class="photo" src="profile.jpg" alt="Profile Photo" />
          <div class="profile-desc">
            <p class="name">${review.name}</p>
            <p class="date">${review.date}</p>
          </div>
        </div>
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
