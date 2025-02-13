import "./index.css"
import { Outlet } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import Navbar from "./components/Navbar";
import img from "./assets/abuki.png";
import { useState } from "react";

const App = () => {
  const[isCollapsed,setisCollapsed]=useState(false)
  const changeCollapsed=()=>{
    setisCollapsed(!isCollapsed)
  }
  return (
    <div>
      <Navbar changeCollapsed={changeCollapsed}/>
      <div className="grid-cont">
        <Aside isCollapsed={isCollapsed}/>
        <Outlet/>
      </div>
    </div>
  );
};

export default App;
<Aside />