import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Login from './Login';
import Dashboard from './Dashboard';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Router;
