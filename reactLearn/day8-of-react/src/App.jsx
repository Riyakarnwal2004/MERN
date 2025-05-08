import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [count,setcount]=useState(0);
  // directly styling dom element
   
   let btnref=useRef();
   function colorchange(){
    btnref.current.style.backgroundColor="red";
   }
  // let val =1;
  let val=useRef(1);
  function incrementCount(){
    setcount(count+1);
    // val=val+1;
    // prersisting variable aftter render
    val.current=val.current+1;
    console.log("val", val.current)
  }
  useEffect(()=>{
    console.log("runs on each render");
  })
  
  //  stopwatch code
  const [time,setTime]=useState(0);
  let timerref=useRef(null);
  function startfunction(){
    timerref.current=setInterval(()=>{
      setTime(time=>time+1);
    },1000);
  }
  function stopTimer(){
    clearInterval(timerref.current);
    timerref.current=null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }
  return (
    <>
      Count:{count}
      <br />
      <br />
      <button ref={btnref} onClick={incrementCount}>Increment</button>
      <br />
      <br />
      <button onClick={colorchange}>Change color</button>


      <div id="stopwatch">
        <p>Time: {time} sec</p>
        <button onClick={startfunction}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>

      </div>
    </>
  )
}

export default App
