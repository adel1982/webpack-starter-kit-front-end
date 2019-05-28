import React, { Component } from "react";
import sassy from "../assets/scss/main.scss";

import favicon from "../assets/img/favicon.ico";
import webpackSchema from "../assets/img/webpack.jpg";

class App extends Component {
  render() {
    return (
      <div className={sassy.app}>
        <img src={webpackSchema} alt="" />
      </div>
    );
  }
}

export default App;
