import { createBrowserRouter } from "react-router-dom";
import Present from "./Present";
import Bought from "./Bought";
import Dashboard from "../pages/Dashboard";
import Sold from "./Sold";

const router = createBrowserRouter([
  { path: "/present", element: <Present /> },
  { path: "/bought", element: <Bought /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/sold", element: <Sold /> }
]);

export default router;
