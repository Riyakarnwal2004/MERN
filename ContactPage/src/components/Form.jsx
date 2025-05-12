import React from 'react'
import girl_image from '/girl_image.svg'

const Form = () => {
  return (
    <div className='flex flex-row justify-evenly p-10 '>
      <div className="left">
        <div className="allbtns flex flex-col gap-4">
        <div className="btns flex gap-3">
          <button className='text-white bg-black p-2'>VIA SUPPORT CHAT</button>
          <button className='text-white bg-black p-2'>VIA CALL</button>
          </div>
          <div className="BIGbtn border-[1px] pl-2">
            <button>VIA EMAIL FORM</button>
          </div>
          
        </div>
      </div>
      <div className="right">
        <img src={girl_image} alt="" />
      </div>
    </div>
  )
}

export default Form