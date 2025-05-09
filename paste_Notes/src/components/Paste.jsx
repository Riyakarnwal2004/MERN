import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { removeFromPaste } from '../features/pasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Paste = () => {

  const pastes=useSelector((state)=>state.paste.pastes);
  const [searchTerm,setSearchTerm]=useState('');
  const dispatch=useDispatch();
  const filteredData=pastes.filter((paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase()))
  function handleDelete(pasteId){
    dispatch(removeFromPaste(pasteId));
  }
  
  return (
    <div>
      <input  className='p-2 rounded-2xl min-w-[600px] mt-5 bg-black' type="search" placeholder='search here' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
      <div className='flex flex-col gap-5 mt-5'>
        {
          filteredData.length>0 && filteredData.map((paste)=>{
          return(
            <div key={paste._id} className='border'>
              <div>
              {paste.title}
              </div>
              <div>
              {paste.content}
              </div>
              <div className='flex flex-row gap-4 place-content-evenly'>
                <button>
                  <NavLink to={`/?pasteId=${paste?._id}`}>Edit</NavLink>
                </button>
                <button ><NavLink to={`/pastes/${paste?._id}`} className='text-white'>View</NavLink></button>
                <button onClick={()=>handleDelete(paste?._id)}>Delete</button>
                <button onClick={()=>{
                  navigator.clipboard.writeText(paste?.content)
    toast.success("Copied to clipboard")
  
                }}>Copy</button>
                <button>Share</button>
              </div>
              <div>
                {paste.createdAt}
              </div>
            </div>
          )
})
        }
      </div>
    </div>
  )
}

export default Paste