import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Router from "./components/Router";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
