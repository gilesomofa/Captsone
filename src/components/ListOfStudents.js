// export default ListOfStudents
import React from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Card from '../components/Card'

const ListOfStudents = (props) => {
  let loggedIn = document.cookie;
  return (
    <Container maxWidth="lg" className="students-container">
      <div className="Gallery">
        {props.list.map((students, idx) => (
          <Card key= {students.studentId} name={students.studentNickName} avatar={students.studentAvatar}/>
        ))}
      </div>
    </Container>
  );
};

export default ListOfStudents;
