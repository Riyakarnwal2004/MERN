import React from 'react'
import flipkart from '../public/flipkart.png'
import amazon from '../public/amazon.png'
import shoe_image from '../public/shoe_image.png'

const Content = () => {
  return (
    <div className='flex flex-row p-10 pl-44 pr-44 justify-between mt-10'>
        <div className="left p-5 w-[40%]">
            <h1 className='text-7xl font-bold'>YOUR FEET DESERVE THE BEST</h1>
            <p className='text-slate-300 text-sm'>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
             <div className="btns flex gap-3 mt-5">
            <button className='bg-red-600 p-2 pl-5 pr-5'>Shop Now</button>
            <button className='border p-2 pl-5 pr-5'>Category</button>
            
           </div>
            <p className='mt-3'>Also Available on</p>
            <div className="web flex gap-3 items-center mt-3">
            <img src={flipkart} alt="" />
            <img src={amazon} alt="" />
            </div>
        </div>
        <div className="right">
            <img src={shoe_image} alt="" />
        </div>
        </div>
  )
}

export default Content