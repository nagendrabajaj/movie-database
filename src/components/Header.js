import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = function () {
  return (
    <header>
      <div className={classes.container}>
        <div className={classes.innercontent}>
          <div className={classes.brand}>
            <NavLink to="/">Watchlist</NavLink>
          </div>
          <ul className={classes.navlinks}>
            <li>
              <NavLink to="/watchlist">Watchlist</NavLink>
            </li>
            <li>
              <NavLink to="/watched">Watched</NavLink>
            </li>
            <li>
              <NavLink to="/add" className={classes.btn}>
                + Add
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
