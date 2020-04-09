import React, { Component } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'


//The Sidebar will have only one function so far- AddNewStudent
//Possible future components could be a resources tab
//Here be sure to be able identify each student info that you want to use 
// for example, name, id, avatar

 class Sidebar extends Component {
    state={
        studentAvatar: '',
        studentNickName : '',
        studentId : '',
        dialogBox : false
        }

    handleTextChange = (e) => {
        const newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState({newState});
        console.log(e.target);
        console.log(this.state.studentNickName);
        console.log(this.state.studentNickName);
      };
    toggleDialogBox = () => {
        this.setState({ dialogBox : !this.state.dialogBox })
    }
    handleSubmit = (e) =>{
        console.log(this.state.studentAvatar)
        console.log(this.state.studentNickName)
        e.preventDefault()
        this.props.addStudent({
            studentAvatar: this.state.studentAvatar,
            studentNickName: this.state.studentNickName,
            studentId: this.state.studentId
            })
            this.toggleDialogBox()
    }
    
    render() {
        return (
            <div> 
                <button onClick={this.toggleDialogBox}>Add New Student</button>
                <Dialog open={this.state.dialogBox}>
                    <form onSubmit={this.handleSubmit}>
                <button type="submit">Submit</button>
                <TextField
                name="studentId"
                placeholder="Student Id"
                value={this.state.studentId}
                onChange={this.handleTextChange}
                required
              />
              <TextField
                name="studentNickName"
                placeholder="Name"
                value={this.state.studentNickName}
                onChange={this.handleTextChange}
                required
              />
                    
                    <img src="../Images/girl1.jpg" alt="picture of girl"/>
                    </form>
                </Dialog>
            </div>
        )
    }
}
export default Sidebar
