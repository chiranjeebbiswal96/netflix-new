import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import './App.css';


function Nav() {
  return (
    <div>

      {/* <BrowserRouter> */}
      <div><img height="60px" width="60px"src="https://wallpapercave.com/wp/wp5063342.png" alt='Netflixlogo '/></div>
      <div className='nav'>
        <div className='link'><NavLink to={'/'} > Home </NavLink></div>
        <div className='link'><NavLink to={'movies'} >Movies</NavLink></div>
        <div className='link'><NavLink to={'tv'} >TV Shows</NavLink></div>
        {/* <div className='link'><NavLink >Login</NavLink></div> */}
        </div>



      {/* </BrowserRouter > */}


    </div >

  );
}

export default Nav;
