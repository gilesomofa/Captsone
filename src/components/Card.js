import React from 'react'
import { Component } from 'react';
import Sidebar from '../components/Sidebar';


//Make this a class component
//create a handleSubmit
class Card extends Component {
    state = {
        dialogueBox: false,

    }
    render() {
        return (
            <div className="studentCard" onClick>
                <p className='studentNickName'>{this.props.name}</p>
                <ul></ul>

            </div>
        )
    }
}
export default Card