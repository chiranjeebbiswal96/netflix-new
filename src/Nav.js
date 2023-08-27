import React from "react";
import { NavLink } from "react-router-dom";
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
      <div className="link" >
        <NavLink to={"/"} style={{color:"white" ,textDecoration:"none", padding:"20px"}}> Home </NavLink>
      </div>
      <div className="link" >
        <NavLink to={"movies"} style={{color:"white" ,textDecoration:"none", padding:"20px"}}>Movies</NavLink>
      </div>
      <div className="link" >
        <NavLink to={"tv"} style={{color:"white" ,textDecoration:"none",padding:"20px"}}>TV Shows</NavLink>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Nav;
