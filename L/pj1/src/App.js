import React, { Component } from "react";
import "./App.css";
import ColorP from "./components/ColorPicker";
import SizeS from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 12
    };
  }

  onSetColor = params => {
    this.setState({
      color: params
    });
  };

  onSetSize = params => {
    this.setState({
      fontSize: this.state.fontSize + params
    });
  };

  onresetSize = params => {
    this.setState({
      fontSize: params
    });
  };

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorP color={this.state.color} onReceiveColor={this.onSetColor} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeS
              fontSize={this.state.fontSize}
              onReceiveSize={this.onSetSize}
            />
            <Reset
              onReceiveColor={this.onSetColor}
              onResetSize={this.onresetSize}
            />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
