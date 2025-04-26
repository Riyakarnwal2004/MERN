import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.handleclick}>{props.text}</button>
        </div>
  )
}

export default Button