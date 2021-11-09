const navmenu = document.querySelectorAll('.nav-list');
const drawer = document.querySelector('#navbar ul');

navmenu.forEach((nav) => {
	nav.addEventListener('click', () => {
		drawer.classList.remove('slide');
		event.stopPropagation();
	});
});
