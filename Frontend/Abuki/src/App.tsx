import { Outlet } from "react-router-dom";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <div className="contatiner">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <div className="col">
          <Aside />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
