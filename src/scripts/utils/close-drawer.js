function hideDrawer(menu, drawer, checkbox, hamburger) {
	const check = checkbox;
	menu.forEach((nav) => {
		nav.addEventListener('click', (event) => {
			event.stopPropagation();
			window.scrollTo(0, 0);
			check.checked = false;
			drawer.classList.remove('slide');
			if (check.checked === false) {
				hamburger.forEach((menus) => {
					const menu = menus;
					menu.style.backgroundColor = '#ff4f03';
				});
			}
		});
	});
}

export default hideDrawer;
