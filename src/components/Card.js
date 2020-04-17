import React from 'react'
import { Component } from 'react'


//Make this a class component
//create a handleSubmit
class Card extends Component  {
    state = {
        dialogueBox: false,
        
    }
    render(){
    return(
        <div className="studentCard" onClick>
            <img className= 'avatar' src={this.props.avatar}/>
            <p className= 'studentNickName'>{this.props.name}</p>
            
        </div>
    )
}
}
export default Card