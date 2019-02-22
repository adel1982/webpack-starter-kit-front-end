import React, { Component } from 'react'
import sassy from '../scss/main.scss'

class App extends Component {
	render () {
		return (
			<div className={sassy.app}>
				<header className={sassy.header}>
					<h1 className={sassy.title}>Webpack Starter Kit</h1>
					<h1 className={sassy.title}>Hello</h1>
				</header>
				<p className={sassy.description}>
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<img src={'img/webpack.jpg'}  alt=""></img>
			</div>
		)
	}
}

export default App