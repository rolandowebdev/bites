function hamburgerAction(checkbox, hamburger) {
	checkbox.addEventListener('change', (event) => {
		event.stopPropagation();
		hamburger.forEach((menus) => {
			const menu = menus;
			checkbox.checked === true
				? (menu.style.backgroundColor = '#fff')
				: (menu.style.backgroundColor = '#ff8303');
		});
	});
}

export default hamburgerAction;
