import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
