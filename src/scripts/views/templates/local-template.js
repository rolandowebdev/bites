const allFoodData = (data) => {
	return `
   <figure class="card">
      <img class="food-image" src="${data['pictureId']}" alt="${data['name']}"> 
      <figcaption class="food-description">
         <p class="food-title">${data['name']}</p>
         <p class="location"><img class="location-icon" src="location.svg" alt="Location Logo">${data['location']}</p>
         <p class="price">$${data['price']}</p>
      </figcaption>
    </figure>
   `;
};

const mostFoodData = (data) => {
	return `
   <figure class="card">
      <img class="food-image" src="${data['pictureId']}" alt="${data['name']}"> 
      <figcaption class="food-description">
         <p class="food-title">${data['name']}</p>
         <p class="location"><img class="location-icon" src="location.svg" alt="Location Logo">${data['location']}</p>
         <p class="price">$${data['price']}</p>
      </figcaption>
      <span class="badge">${data['badge']}</span>
    </figure>
   `;
};

const chooseBites = (data) => {
	return `
   <img class="choose-image" src="${data['pictureId']}" alt="choice image">
   <div class="choose-description">
     <h3 class="choose-title">${data['title']}</h3>
     <div class="list-choose">
       <span class="list-choose-item">
         <img class="arrow-icon" src="arrow.svg" alt="Arrow Logo">
         ${data['reasonOne']}
       </span>
       <span class="list-choose-item">
         <img class="arrow-icon" src="arrow.svg" alt="Arrow Logo">
         ${data['reasonTwo']}
       </span>
       <span class="list-choose-item">
         <img class="arrow-icon" src="arrow.svg" alt="Arrow Logo">
         ${data['reasonThree']}
       </span>
     </div>
   </div>
   `;
};

export { mostFoodData, allFoodData, chooseBites };
