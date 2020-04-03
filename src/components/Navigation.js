import React, { Component } from "react";
import { Button } from "@material-ui/core/Button";
import { Tyography } from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class Navigation extends Component {
  render() {
    return (
      <Container>
        <div className= 'Navigation'>
          <h1
            style={{
              backgroundColor: "blue",
              fontFamily: "Noto Sans",
              height: "150px",
              display: "flex" 
            }}
          >
            Daily Sped
          </h1>
          
        </div>
      </Container>
    );
  }
}
export default Navigation;
