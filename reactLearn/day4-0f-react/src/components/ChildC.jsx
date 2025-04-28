import React, { useContext } from 'react'
import { UserContext } from '../App'
import './ChildC.css'
import { themeContext } from '../App'

const ChildC = () => {
    const user=useContext(UserContext);
    const {theme ,settheme}=useContext(themeContext);
    function handletheme(){
        if(theme==="light"){
            settheme("dark")
        }
        else{
            settheme("light");
        }
    }
  return (

    <div>
{/*         
       <p> this is child c
        <br/>
        consumed from parent: {user.name}
       </p> */}
       
       <div className='container' style={{backgroundColor:theme==="light"?"beige":"black"}} >
        <button onClick={handletheme}>change theme</button>
        data:{user.name}
       </div>



       </div>
  )
}

export default ChildC