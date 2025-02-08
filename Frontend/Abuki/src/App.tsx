import { Outlet } from "react-router-dom";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import "./index.css";


const App = ()=> {
  return (
    <>
      <Navbar />
      <Aside />
      <Outlet/> 
    </>
  );
};

export default App;
