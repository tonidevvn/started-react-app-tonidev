import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/MainRoutes";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, toogle } from "../utils/darkModeSlice";
import { toast } from "react-toastify";

function NavBarComponent() {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const tick = () => {
    setTime({
      time: new Date().toLocaleTimeString(),
    });
  };

  const timerID = setInterval(tick, 1000);
  useEffect(() => {
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const handleDarkModeChange = () => {
    dispatch(toogle());
    toast.success(`Changed dark mode`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      <div className="row ">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-sm">
            <ul className="nav nav-pills d-flex justify-content-center align-items-center">
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
                  {time.time}
                </a>
              </li>

              <li className="nav-item">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={darkMode}
                    onChange={handleDarkModeChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Dark mode
                  </label>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBarComponent;
