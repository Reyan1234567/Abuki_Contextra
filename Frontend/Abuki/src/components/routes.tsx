import { createBrowserRouter } from "react-router-dom";
import Present from "./Inventory";
import Bought from "./Bought";
import Dashboard from "../pages/Dashboard";
import Sold from "./Sold";
import App from "../App";
import SoldPage from "../pages/SolddPage";
import PresentPage from "../pages/InventoryPage";
import BoughtPage from "../pages/BoughtPage";
import InventoryPage from "../pages/InventoryPage";
import InventoryForm from "./InventoryForm";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage/> },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/present", element: <InventoryPage /> },
      { path: "/InventoryForm", element: <InventoryForm /> },
      { path: "/InventoryForm/:id", element: <InventoryForm /> },
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
