import React from 'react';
import { isMobile } from 'react-device-detect';
import HomePage from './land/HomePage';
import './App.css';

function App(){
let x = <HomePage />;
  if(isMobile)
    {
      x = <div>
        <h1>Mobile</h1>
      </div>;
    }

    return x;



}

export default App;
