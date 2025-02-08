import { createBrowserRouter } from "react-router-dom";
import Present from "./Inventory";
import Bought from "./Bought";
import Dashboard from "../pages/Dashboard";
import Sold from "./Sold";
import App from "../App";
import SoldPage from "../pages/SolddPage";
import PresentPage from "../pages/InventoryPage";
import BoughtPage from "../pages/BoughtPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/present", element: <Present /> },
      { path: "/bought", element: <Bought /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/sold", element: <Sold /> },
      { path: "/soldPage", element: <SoldPage /> },
      { path: "/presentPage", element: <PresentPage /> },
      { path: "/boughtPage", element: <BoughtPage /> },
    ],
  },
]);

export default router;
