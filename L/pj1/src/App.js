import React, { Component } from "react";
import "./App.css";
import ColorP from "./components/ColorPicker";
import SizeS from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

class App extends Component {
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorP />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeS />
            <Reset />
          </div>
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
