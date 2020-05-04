import React, { Component } from "react";
import Sidebar from "../containers/Sidebar";
import ListOfStudents from "../containers/ListOfStudents";

//The Dashboard is my app home page that will render the StudentGallery on right
//and Sidebar on left
class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Sidebar className="sideBar" />
        <ListOfStudents className="studentGallery" />
        
      </div>
    );
  }
}
export default Dashboard;
