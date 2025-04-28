// to avoid propdrilling we use use context hook

import { createContext, useState } from "react"
import ChildA from "./components/ChildA";
import ChildC from "./components/ChildC";

// step 1: create context
const UserContext=createContext();
// step2:wrap all child inside provider
// step3:pass value
// step4: export context
// step5:consumer
 const themeContext=createContext();
function App() {
   const[user,setuser]=useState({name:"riya"});
  const [theme,settheme]=useState("light");

  return (
    <>
    
      {/*<UserContext.Provider value={user}>
        <ChildA/> 
      </UserContext.Provider> */}
      <UserContext.Provider value={user}>
      <themeContext.Provider value={{theme,settheme}}>

        <ChildC/>
      </themeContext.Provider>
      </UserContext.Provider> 
    </>
  )
}

export default App
export {UserContext}
export {themeContext}
