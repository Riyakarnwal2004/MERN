
import React, { useState, useMemo, useCallback } from "react";

const NumberList = ({ numbers, onItemClick }) => {
  console.log("Rendering NumberList...");
  return (
    <ul>
      {numbers.map((n, index) => (
        <li key={index} onClick={() => onItemClick(n)}>
          {n}
        </li>
      ))}
    </ul>
  );
};
import './App.css'

function App() {
  
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([10, 30, 20, 35]);

  // 🔁 Memoized sort - only recomputes when `numbers` changes
  const sortedNumbers = useMemo(() => {
    console.log("Sorting numbers...");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  // 🧠 Memoized callback - only changes if dependencies change
  const handleItemClick = useCallback((num) => {
    alert(`You clicked number: ${num}`);
  }, []);
  return (
    <>
       <div>
      <h2>useCallback & useMemo Demo</h2>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
      <NumberList numbers={sortedNumbers} onItemClick={handleItemClick} />
    </div>


    {/* sortedNumbers is only recalculated when numbers changes (thanks to useMemo).

handleItemClick is the same function on each render unless dependencies change (thanks to useCallback).

Clicking the button re-renders the component, but:

NumberList only re-renders if numbers or onItemClick changes.

Sorting doesn’t run again unless needed */}
    </>
  )
}

export default App
