import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='flex flex-row gap-3'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/paste">Paste</NavLink>
    </div>
  )
}

export default NavBar