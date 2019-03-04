import React, { Component } from 'react'
import sassy from '../assets/scss/main.scss';
import image from '../assets/images/webpack.jpg';
import favicon from '../assets/images/favicon.ico';
class App extends Component {
	render () {
		return (
			<div className={sassy.app}>
				<header className={sassy.header}>
				<h1 className={sassy.title}>Webpack Starter Kit</h1>
				<h1 className={sassy.title}>Hello</h1>
				</header>
				<img src={image} width="200"/>
				<p className={sassy.description}>
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		)
	}
}

export default App