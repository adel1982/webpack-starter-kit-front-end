const layers = document.querySelectorAll('.layer');

window.addEventListener('scroll', () => {
	layers.forEach(layer => {
		let speed 		= layer.getAttribute('data-speed');
		let movement 	= - (window.scrollY * speed); 	
		layer.style.transform = 'translateY(' + movement + 'px)';
	});
});