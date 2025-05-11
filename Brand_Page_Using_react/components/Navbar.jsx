import React from 'react'
import brand_logo from '../public/brand_logo.png'

const Navbar = () => {
    return (
        <div className='flex flex-row w-[100%] mt-3  pl-8 pr-8 items-center justify-between'>
           <div className="logo flex justify-items-start ">
            <img src={brand_logo} alt="" />
           </div>
           <div className="tabs_list ">
            <ul className='flex flex-row gap-3'>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
           </div>
           <div className="btn ">
            <button className='bg-red-600 p-2 text-white w-[100%]'>Login</button>
           </div>
        </div>
    )
}

export default Navbar