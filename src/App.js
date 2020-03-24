import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom' ;
import Login from './components/Login';
import Navigation from './components/Navigation'

function App () {
  return(
    
      <BrowserRouter>
        <Navigation />,
        <Login />
      </BrowserRouter>

      ) 
}

export default App;

