import React, { Component } from "react";
import logo from "../assets/images/logo.svg";

export class Logo extends Component {
  render() {
    return (
      <div style={{ display: "block", height: "80px" }}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Logo;
