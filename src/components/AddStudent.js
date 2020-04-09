import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Card,
} from "@material-ui/core";
import { connect } from "react-redux";

//created the AddStudent Class
//that allows me to add new students to the listOfStudent and
//Render them in the studentGallery
class AddStudent extends Component {
  state = {
    open: false,
    id: "",
    name: "",
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState({newState});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...this.state };
    console.log(payload);
    // payload.id = this.props.listOfStudents + 1;
    // delete payload.open;
    // console.log("THE STUDENT", payload);
    // this.props.AddStudent(payload);
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        studentAvatar: "",
        studentNickName: "",
        studentId: "",
      });
    }
  };

  render() {
    console.log(props, "addStudents.props");
    return (
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            
              <form
                //here my onSubmit needs to update the state in ListOfStudents
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <TextField
                  id="id"
                  placeholder="Student Id"
                  value={this.state.id}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleTextChange}
                  required
                />
                <div>
                //this is where I will display icons for selection by admin at addStudent
                </div>
                <br />
                <Button variant="contained" color="primary" type="submit">
                  Submit 
                </Button>
              </form>
          </Dialog>
    );
  }
}

export default AddStudent;

// <div style={{ textAlign: "center" }}>
//            <h1>Add Student:</h1>
//          <Button
//             variant="contained"
//             className="add-student"
//             onClick={this.toggleDialog}
//           >
//             Add Student
//           </Button>
//         </div>
//         <div></div>