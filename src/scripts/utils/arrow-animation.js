function arrowAnimation(link, arrows) {
	const arrow = arrows;
	link.addEventListener('mouseover', (event) => {
		event.stopPropagation();
		arrow.style.transform = 'translateX(5px)';
	});

	link.addEventListener('mouseout', (event) => {
		event.stopPropagation();
		arrow.style.transform = 'translateX(0px)';
	});
}

export default arrowAnimation;
