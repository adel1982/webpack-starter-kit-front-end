import React from 'react';
import ReactDOM from 'react-dom';
import './assets/favicon.ico';
import './assets/fonts/aftasansthin-regular-webfont.ttf';
import './assets/scss/main.scss'
import image from './assets/images/webpack.jpg';

const App = () => {
	<div>
		<h1 className="title">Bonjour Webpack</h1>

		<img src={image} />
	</div>
};

ReactDOM.render(<App />, document.getElementById('root'));
