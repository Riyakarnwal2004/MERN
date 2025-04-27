import './App.css'
import { use, useEffect, useState } from 'react'

function App() {
// learning useEffect hook


  //  /* variation 1 runs on evry render */
   const [count,setcount]=useState(0);
   const [timecount,settimecount]=useState(0);
  // useEffect(()=> {
  //   alert("runs on each render")
  // })
  function handleclick(){
     setcount(count+1);
  }
  function handletimeclick(){
    settimecount(timecount+1);
  }
  // // variation 2 runs on first render
  // useEffect(()=>{
  //   alert("runs on first render")
  // },[])
  // variation 3 render after updating dependency
  // useEffect(()=>{
  //   alert("runs on updating dependency")
  // },[count])

  // variation 4  multiple dependency
  // useEffect(()=>{
  //   alert("runs on updating dependency")
 // },[count,timecount])

  // variation5 
  useEffect(()=>{
    alert("running")
    return()=>{
      console.log("stop")
    }
 
},[count])

  return (
    <>
    {/* /* variation 1 runs on evry render */ }
      {/* <button onClick={handleclick}>click me</button>
      <p>count is {count}</p>  */}

      {/* variation2
       <button onClick={handleclick}>click me</button>
       <p>count is {count}</p> */}

       {/* variation 3 */}
       {/* <button onClick={handleclick}>click me</button>
       <p>count is {count}</p> */}

       {/* variation 4 */}
       <button onClick={handleclick} >click me</button>
       <p>count is {count}</p>
       <button onClick={handletimeclick}> click for time</button>
       <p>time count {timecount}</p>

    </>
  )
}

export default App
