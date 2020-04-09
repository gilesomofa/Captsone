import React from 'react'



const Card = ({ name, avatar }) =>{
    return(
        <div>
        <img className= 'avatar' src={avatar}/>
        <p className= 'studentNickName'>{name}</p>
        </div>
    )
}
export default Card