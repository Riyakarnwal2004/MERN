import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBAr.css'

const NavBAr = () => {
  return (
    <div>
    <ul>
     <li> <NavLink to='/' className={({isActive})=>(isActive?"active-link":"")}>Home</NavLink></li>
     <li><NavLink to='/About' className={({isActive})=>(isActive?"active-link":"")}>About</NavLink></li>
     <li><NavLink to='/Dashboard' className={({isActive})=>(isActive?"active-link":"")}>Dashboard</NavLink></li>
     <li><NavLink to='/student/abced'>Param Component</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBAr