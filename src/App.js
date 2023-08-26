import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './home';
import Movies from './Movies';
import Tvshows from './tv';

function App() {
  console.log("hello")
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} index  />
        <Route path='/movies' element={ <Movies/> } index  />
        <Route path='/tv' element={ <Tvshows/> } index  />
      </Routes>
    </div>
     
     
      
    

  );
}

export default App;
