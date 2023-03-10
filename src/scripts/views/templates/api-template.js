import CONFIG from '../../global/config';

const listOutlet = (outlet) => {
	return `
  <figure class="outlet-card">
    <a href="${`/#/detail/${outlet.id || 'outlet not found'}`}">
      <div class="outlet-image-wrapper">
        <img class="outlet-image lazyload" 
        data-src="${
					CONFIG.BASE_IMAGE_URL + outlet.pictureId || 'outlet not found'
				}">
      </div>
    </a>
    <figcaption class="outlet-wrapper">
      <p class="outlet-name" id="outletName">
        <a href="${`/#/detail/${outlet.id || 'outlet not found'}`}">
          ${outlet.name || 'outlet not found'}
        </a>
      </p>
      <p class="outlet-location"><img class="location-icon" src="icons-set/location.svg" alt="Location Icon">${
				outlet.city || 'outlet not found'
			}
      </p>
      <p class="outlet-description">${outlet.description}</p>
      <p class="outlet-rating"><img class="star" src="icons-set/star.svg" alt="Star Logo">
        ${outlet.rating || 'outlet not found'}
      </p>
    </figcaption>
  </figure>
   `;
};

const createSkeletonUi = (count) => {
	let skeleton = '';
	for (let i = 0; i < count; i += 1) {
		skeleton += `
    <figure class="outlet-card">
      <div class="outlet-image-wrapper">
        <img class="outlet-image lazyload skeleton" 
        src="images/placeholder.png">
      </div>
      <figcaption class="outlet-wrapper">
         <p class="skeleton skeleton-text"></p>
         <p class="skeleton skeleton-text"></p>
         <p class="skeleton skeleton-text"></p>
         <p class="skeleton skeleton-text"></p>
      </figcaption>
   </figure>
    `;
	}
	return skeleton;
};

const detailOutlet = (outlet) => {
	return `
  <section class="detail-outlet-section wrapper">
   <h2 class="detail-outlet-name">${outlet.name}</h2>
   <p class="detail-outlet-location">${outlet.address} ${outlet.city}</p>
   <figure class="description-wrapper">
     <div class="outlet-border">
      <img class="detail-outlet-image lazyload" src="${
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
       <p class="detail-outlet-rating"> <img src="icons-set/star.svg" alt="Star Icon"/> ${
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
          <span class="menu-location"><img class="location-icon" src="icons-set/location.svg" alt="Location Icon">Western food</span>
          <span class="menu-buy">
            <p class="menu-price">$4.3</p>
            <span class="chart-wrapper"><img class="chart-icon" src="icons-set/chart.svg" alt="Chart Icon"/></span>
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
          <span class="menu-location"><img class="location-icon" src="icons-set/location.svg" alt="Location Icon">Indonesian food</span>
          <span class="menu-buy">
            <p class="menu-price">$4.3</p>
            <span class="chart-wrapper"><img class="chart-icon" src="icons-set/chart.svg" alt="Chart Icon"/></span>
          </span>
        </div>
      </div>
    </div>
  `;
};

const reviewOutlet = (review) => {
	return `
    <section class="review-card">
      <div class="desc"><p class="review-text">${review.review}</p></div>
      <div class="profile">
        <img class="photo" src="images/profile.jpg" alt="Profile Photo" />
        <div class="profile-desc">
          <p class="name">${review.name}</p>
          <p class="date">${review.date}</p>
        </div>
      </div>
    </section>
  `;
};

const createLikeOuletTemplate = () => `
  <button aria-label="like outlet" id="likeButton" class="like-btn">
    <img class="like" src="icons-set/heart-regular.svg" alt="Heart Regular" />
  </button>
  `;

const createUnlikeOuletTemplate = () => `
  <button aria-label="unlike outlet" id="likeButton" class="like-btn">
    <img class="like" src="icons-set/heart-solid.svg" alt="Heart Solid" />
  </button>
`;

export {
	listOutlet,
	detailOutlet,
	foodMenu,
	drinkMenu,
	reviewOutlet,
	createLikeOuletTemplate,
	createUnlikeOuletTemplate,
	createSkeletonUi,
};
