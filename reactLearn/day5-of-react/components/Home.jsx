import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate=useNavigate();
function handleclick(){
  navigate("/Dashboard");
}
  return (
    <div>Home
      <button onClick={handleclick}> move to dashboard</button>
    </div>
  )
}

export default Home