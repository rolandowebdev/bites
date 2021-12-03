const checkbox = document.querySelector('.hamburger-menu input');
const hamburger = document.querySelectorAll('.hamburger-menu span');

checkbox.addEventListener('change', (event) => {
	event.stopPropagation();
	hamburger.forEach((menus) => {
		const menu = menus;
		checkbox.checked === true
			? (menu.style.backgroundColor = '#fff')
			: (menu.style.backgroundColor = '#ff8303');
	});
});
