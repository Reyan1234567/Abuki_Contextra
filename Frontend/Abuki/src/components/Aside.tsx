import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/present">Present</Link>
      </li>
      <li>
        <Link to="/bought">Bought</Link>
      </li>
      <li>
        <Link to="/sold">Sold</Link>
      </li>
    </ul>
  );
};

export default Aside;
