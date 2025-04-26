import React from 'react'

const Card = ( props) => {
  return (
    <div>
        {props.children}
        <input type="text" onChange={(e)=>{props.setname(e.target.value)}} />
        <p>inside child element:{props.name}</p>
        </div>
  )
}

export default Card