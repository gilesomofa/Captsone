import React, { Component } from 'react'


const arrOfStudents = ['Giles'];
const student = props =>{

}
 class StudentGallery extends Component {

    state ={
        avatar : '',
        nickname : '',
        studentId : '',
}
    render() {
        console.log(arrOfStudents)

        return (
            <div>
            <h1>
            My Amazing Students
            </h1>
            <div>
            // arrOfStudents.map(student=>(
            //     //this is where student component with props go
            //     //nickname as props, id, and avatar as well as delete 

            // ))
            
            </div>
            </div>
        )
    }
}
export default StudentGallery