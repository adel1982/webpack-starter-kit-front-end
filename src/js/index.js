import React from 'react' 
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))


const layers = document.querySelectorAll('.layer');

window.addEventListener('scroll', () => {
	layers.forEach(layer => {
		let speed 		= layer.getAttribute('data-speed');
		let movement 	= - (window.scrollY * speed); 	
		layer.style.transform = 'translateY(' + movement + 'px)';
	});
});