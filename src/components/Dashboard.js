import React, { Component } from 'react';
import StudentGallery from './StudentGallery';
import Sidebar from './Sidebar';

 class Dashboard extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <StudentGallery />     
            </div>
        )
    }
}
export default Dashboard