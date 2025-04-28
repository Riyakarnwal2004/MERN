// old and simplay way for react routing



// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }



// for large projects

import { createBrowserRouter, NavLink, RouterProvider, useNavigate } from "react-router-dom";
import './App.css';
import Home from "../components/Home";
import About from "../components/About";
import Dashboard from "../components/Dashboard";
import NavBAr from "../components/NavBAr";
import ParamComp from "../components/ParamComp"
import Courses from "../components/Courses"
import MockTest from "../components/MockTest"


const router = createBrowserRouter([
  {
    path: "/",
    element:<div>
      <Home />
      <NavBAr/>
    </div> 
  },
  {
    path: "/about",
    element: <div>
    <About/>
    <NavBAr/>
  </div> 
  },
  {
    path: "/dashboard",
    element: <div>
    <Dashboard />
    <NavBAr/>
  </div>,
  
  children:[
    {path:'courses',
    element:<Courses/>
    },
    {
      path:'Mock-test',
      element:<MockTest/>
    }

  ] 
  },
  {
    path:"/student/:id",
    element:<div>
    <ParamComp/>
    <NavBAr/>
  </div> 

  }
  
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
