import React from 'react'
import gulabJamun from '../assets/gulabJamun.png'
import "../components/UserCard.css"
const userCard = (props) => {
  return (
    <div className='card-container'>
      <h1>{props.name}</h1>
      <img src={props.image} alt="gulabjamun" />
      <p>{props.desc}</p>
    </div>
  )
}

export default userCard