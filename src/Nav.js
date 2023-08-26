import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";

function Nav() {
  return (
    <div className="nav">
      <NavLink to={"/"}>
        <img
          height="40px"
          width="60px"
          src="https://wallpapercave.com/wp/wp5063342.png"
          alt="Netflixlogo "
        />
      </NavLink>
      <div className="link">
        <NavLink to={"/"}> Home </NavLink>
      </div>
      <div className="link">
        <NavLink to={"movies"}>Movies</NavLink>
      </div>
      <div className="link">
        <NavLink to={"tv"}>TV Shows</NavLink>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Nav;
