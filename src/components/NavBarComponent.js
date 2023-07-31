import React from "react";
import { NavLink } from "react-router-dom";

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    console.log(">>> Component did mount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log(">>> Component will unmount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-sm">
              <ul className="nav nav-pills">
                <li className="nav-item ">
                  <NavLink
                    to="/"
                    exact={true}
                    className="nav-link"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/todo-app"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Todo App
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="active"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    {this.state.date.toLocaleTimeString()}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarComponent;
