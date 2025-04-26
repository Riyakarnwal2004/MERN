import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button';
import Logout from './components/Logout';
import Login from './components/Login';

function App() {
    const [count,setcount]=useState(0);
    function handleclick(){
      setcount(count+1);
    }
    const [name,setname]=useState("");
    {/* conditional rendering */}
    const [isloggedin,setLoggedin]=useState(true);
     if(!isloggedin){
      return(
      <Login/>
      )
     }

    // if(isloggedin){
    //   return(
    //     <Logout/>
    //   )
    // }
    
    else{
  return (
    <>
    {/* <Login/> */}
    {/* sending props from parent to children */}
     <Card name="reena">
      <h1>HEllo i am from app.jsx heading</h1>
      <p>this is paragraph from app.jsx</p>
     </Card>
     {/* sending functon as a prop from parent to children */}
     <Button handleclick={handleclick} text="click Me">
      <h1>{count}</h1>
     </Button>
     {/* state lifiting */}
     <Card name={name} setname={setname}>
      <p>inside parent element</p>
       </Card>
       {/* conditional rendering */}
       {/* {isloggedin?<Logout/>:<Login/>} */}
       {isloggedin && <Logout/>}
      
    </>
  )
}
}

export default App
