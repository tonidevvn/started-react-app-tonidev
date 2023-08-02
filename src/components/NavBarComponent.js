import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/MainRoutes";

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
                {routes.map((route, index) => {
                  return (
                    <li key={index} className="nav-item ">
                      <NavLink
                        to={route.path}
                        exact={true}
                        className="nav-link"
                        activeClassName="active"
                      >
                        {route.title}
                      </NavLink>
                    </li>
                  );
                })}
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
