function hideDrawer(menu, drawer, checkbox) {
	const check = checkbox;
	menu.forEach((nav) => {
		nav.addEventListener('click', (event) => {
			event.stopPropagation();
			window.scrollTo(0, 0);
			check.checked = false;
			drawer.classList.remove('slide');
		});
	});
}

export default hideDrawer;
