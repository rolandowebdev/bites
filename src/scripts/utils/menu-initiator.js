function hideDrawer(menu, drawer, checkbox, hamburger) {
	const check = checkbox;
	const burger = hamburger;
	menu.forEach((nav) => {
		nav.addEventListener('click', (event) => {
			event.stopPropagation();
			window.scrollTo(0, 0);
			check.checked = false;
			drawer.classList.remove('slide');
			if (check.checked === false) {
				burger[0].style.backgroundColor = '#ff8303';
				burger[1].style.backgroundColor = '#ff8303';
				burger[2].style.backgroundColor = '#ff8303';
			}
		});
	});
}

export default hideDrawer;
