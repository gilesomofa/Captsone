import React, { Component } from "react";
import { Button } from "@material-ui/core/Button";
import { Tyography } from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import shadows from "@material-ui/core/styles/shadows";

class Navigation extends Component {
  render() {
    return (
        <div className= 'Navigation'
        style={{
          backgroundColor: "blue",
          fontFamily: "Noto Sans",
          height: "150px",
          display: "block"
        }}>
          <h1 >
            Daily Sped
          </h1>   
          <p>Daily Behavioral Tracking Tool</p>
       </div>
    );
  }
}
export default Navigation;
