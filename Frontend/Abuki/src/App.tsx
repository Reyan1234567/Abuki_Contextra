import "./index.css"
import { Outlet } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import Navbar from "./components/Navbar";
import img from "./assets/abuki.png";
import { createContext, useState } from "react";

export const CollapsedContext=createContext({
  isCollapsed:false,
  changeCollapsed:()=>{}
})

const App = () => {
  
  const[isCollapsed,setisCollapsed]=useState(false)
  const changeCollapsed=()=>{
    setisCollapsed(!isCollapsed)
  }

  const contextValue={
    isCollapsed,
    changeCollapsed
  }

  return (
    <div>
      <CollapsedContext.Provider value={contextValue}>
        <Navbar/>
          <div className="grid-cont">
            <Aside/>
            <Outlet/>
          </div>
      </CollapsedContext.Provider>
    </div>
  );
};

export default App;
//<Aside />