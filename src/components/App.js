import React, { Component } from 'react'
import sassy from '../assets/scss/main.scss';

import favicon from '../assets/img/favicon.ico';
import webpackLogo from '../assets/img/webpack.svg';
import webpackSchema from '../assets/img/webpack.jpg';
import reactIcon from '../assets/img/React-icon.svg';

class App extends Component {
	render () {
		return (
			<div className={sassy.app}>
				<header className={sassy.header}>
					<img src={webpackLogo} className={sassy.logo}/>
				</header>
				<div className={sassy.content}>
					<img src={reactIcon} className={sassy.reactIcon}/>
					<img src={webpackSchema}/>
				</div>
			</div>
		)
	}
}

export default App