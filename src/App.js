import React from 'react';
import './App.css';
import Nav from './Nav';
import Originals from './Originals';
import { Api_key } from './Api';
import { imgUrl } from './Api';
import Action from './Action';
import Comedy from './Comedy';

function App() {
  console.log("hello")
  return (
    <div>
      <Nav/>
      <Originals/>
      <Action/>
      <Comedy/>
    </div>
     
     
      
    

  );
}

export default App;
