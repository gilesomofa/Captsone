import React, { Component } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'
//Here be sure to be able identify each student info that you want to use 
// for example, name, id, avatar

 class Sidebar extends Component {
    state={
        studentName : '',
        studentId : '',
        dialogBox : false
        }
    pushStudentData = () =>{

    }
    handleTextChange = (e) =>{
        console.log(this.state)
        this.setState({[e.target.name]: e.target.value })

    } 
    toggleDialogBox = () => {
        this.setState({ dialogBox : !this.state.dialogBox })
    }
    render() {
        return (
            <div>
                //list of buttons with onClick Buttons
                //AddStudent(MUI Dialogue boxex make sure to use toggle open boolean) 
                <button onClick={this.toggleDialogBox}>Add New Student</button>
                <Dialog open={this.state.dialogBox}>
                    <form onSubmit={this.toggleDialogBox}>
                <button type="submit">Submit</button>
                    <TextField name="studentName" 
                    placeholder="Name" 
                    value={this.state.studentName} 
                    onChange={this.handleTextChange} 
                    required/>
                    <TextField name="studentId" 
                    placeholder="Student Id" 
                    value={this.state.studentId} 
                    onChange={this.handleTextChange} 
                    required/>
                    //avatar goes here all images
                    <img src="../Images/girl1.jpg" alt="picture of girl"/>
                    </form>
                </Dialog>
            </div>
        )
    }
}
export default Sidebar
