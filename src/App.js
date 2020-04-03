import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Router from './components/Router';

function App () {
  return(
    
      <BrowserRouter>
        <Navigation />,
        <Router />
      </BrowserRouter>

      ) 
}

export default App;

