import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,incrementByAmount, reset } from './features/counterSlice';
import './App.css'
import UserList from './UserList';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [Amount,setAmount]=useState(0);
  function handleincrement(){
    dispatch(incrementByAmount(Amount));
  }
  function handleReset(){
    dispatch(reset());
  }
  return (
    <>
     <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
       <input type="Number" value={Amount} placeholder='Enter Amount' onChange={(e)=>setAmount(e.target.value)}/> 
       <button onClick={handleincrement}>Inc By amount</button>
       <button onClick={handleReset}>Reset</button>
       </>
  )
}

export default App
