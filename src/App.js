import React, { Component } from 'react'

import style from './App.css'
import plop from './plop.css'

class App extends Component {
	render () {
		return (
			<div className={style.app}>
				<header className={style.header}>
				<h1 className={style.title}>Webpack Starter Kit</h1>
				<h1 className={plop.title}>Hello</h1>
				</header>
				<p className={style.description}>
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		)
	}
}

export default App