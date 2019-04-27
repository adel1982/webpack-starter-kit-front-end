import React, { Component } from 'react'
import sassy from '../assets/scss/main.scss';

import favicon from '../assets/img/favicon.ico';
import webpackLogo from '../assets/img/webpack.svg';
import webpackSchema from '../assets/img/webpack.jpg';

class App extends Component {
	render () {
		return (
			<div className={sassy.app}>
				<header className={sassy.header}>
					<img src={webpackLogo} className={sassy.logo} alt=""/>
				</header>
				<div className={sassy.content}>
					<img src={webpackSchema} alt=""/>
					<h1>Titre</h1>
					<p>Du text </p>
				</div>
			</div>
		)
	}
}

export default App