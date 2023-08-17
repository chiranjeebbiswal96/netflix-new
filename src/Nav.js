import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import './App.css';

function Nav() {
  console.log("hi")
  console.log("hhhhh")
  return (
    <div>

      <BrowserRouter>
      <div><img height="60px" width="60px"src="https://wallpapercave.com/wp/wp5063342.png" alt='Netflixlogo '/></div>
      <div className='nav'>
        <div className='link'><NavLink >TV Shows</NavLink></div>
        <div className='link'><NavLink >Movies</NavLink></div>
        <div className='link'><NavLink >Categories</NavLink></div>
        <div className='link'><NavLink >Login</NavLink></div>
        </div>



      </BrowserRouter >


    </div >

  );
}

export default Nav;
