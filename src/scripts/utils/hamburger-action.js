function hamburgerAction(checkbox, hamburger) {
	document;
	checkbox.addEventListener('change', (event) => {
		event.stopPropagation();
		hamburger.forEach((menus) => {
			const menu = menus;
			checkbox.checked === true
				? (menu.style.backgroundColor = '#fff')
				: (menu.style.backgroundColor = '#ff4f03');
		});
	});
}

export default hamburgerAction;
