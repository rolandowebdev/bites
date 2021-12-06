const allFoodData = (data) => {
	return `
   <figure class="card">
      <img class="food-image lazyload" data-src="${data['pictureId']}" alt="${data['name']}"> 
      <figcaption class="food-description">
         <p class="food-title">${data['name']}</p>
         <p class="location"><img class="location-icon" src="icons-set/white-location.svg" alt="Location Logo">${data['location']}</p>
         <p class="price">$${data['price']}</p>
      </figcaption>
    </figure>
   `;
};

const mostFoodData = (data) => {
	return `
   <figure class="card">
   <img class="food-image lazyload" data-src="${data['pictureId']}" alt="${data['name']}"> 
      <figcaption class="food-description">
         <p class="food-title">${data['name']}</p>
         <p class="location"><img class="location-icon" src="icons-set/white-location.svg" alt="Location Logo">${data['location']}</p>
         <p class="price">$${data['price']}</p>
      </figcaption>
      <span class="badge">${data['badge']}</span>
    </figure>
   `;
};

const skeletonFood = (count) => {
	let skeleton = '';
	for (let i = 0; i < count; i += 1) {
		skeleton += `
    <figure class="card">
      <img class="food-image lazyload" src="images/placeholder.png" alt="skeleton image"> 
      <figcaption class="skeleton-description">
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

const chooseBites = (data) => {
	return `
   <div class="choose-outline">
   <img class="choose-image lazyload" data-src="${data['pictureId']}" alt="Choose Image"> 
   </div>
   <div class="choose-description">
     <h3 class="choose-title">${data['title']}</h3>
     <div class="list-choose">
       <span class="list-choose-item">
         <img class="arrow-icon" src="icons-set/arrow.svg" alt="Arrow Logo">
         ${data['reasonOne']}
       </span>
       <span class="list-choose-item">
         <img class="arrow-icon" src="icons-set/arrow.svg" alt="Arrow Logo">
         ${data['reasonTwo']}
       </span>
       <span class="list-choose-item">
         <img class="arrow-icon" src="icons-set/arrow.svg" alt="Arrow Logo">
         ${data['reasonThree']}
       </span>
       <span class="list-choose-item">
         <img class="arrow-icon" src="icons-set/arrow.svg" alt="Arrow Logo">
         ${data['reasonFour']}
       </span>
     </div>
   </div>
   `;
};

export { mostFoodData, allFoodData, chooseBites, skeletonFood };
