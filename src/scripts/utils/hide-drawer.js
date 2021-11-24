const navmenu = document.querySelectorAll('.nav-list');
const drawer = document.querySelector('#navbar ul');

navmenu.forEach((nav) => {
	nav.addEventListener('click', (event) => {
		event.stopPropagation();
		drawer.classList.remove('slide');
		window.scrollTo(0, 0);
	});
});
