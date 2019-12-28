import React, { Component } from "react"
import sassy from "../assets/scss/main.scss"

import favicon from "../assets/img/favicon.ico"
import webpackSchema from "../assets/img/schema-webpack.jpg"
import webpackLogo from "../assets/img/logo-webpack.svg"
import gitHubLogo from "../assets/img/logo-github.svg"

class App extends Component {
  render() {
    return (
      <div>
        <img src={webpackLogo} alt="" className={sassy.logo} />
        <h1>Starter Kit</h1>
        <a href="https://github.com/adel1982/webpack-starter-kit-front-end" target="_blank">
          <img src={gitHubLogo} alt="" className={sassy.logoGithub}  />
        </a>
        <img src={webpackSchema} alt="" className={sassy.schema} />
      </div>
    );
  }
}

export default App;
