import axios from "axios";
import Inventory from "../components/Inventory";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PresentPage = async () => {


  const response = await axios.get("http://localhost:9000/api/inventory");
  const PaintInStore = response;

  const onDelete = (_id: string) => {
    PaintInStore.filter((id: string) => id !== _id);
    axios.delete(`http://localhost:9000/api/inventory/${_id}`);
  };

  const onUpdate = async (_id) => {
    const response = await axios.get("http://localhost:9000/api/inventory/_id");
  };
  return (
    <div>
      <Link to="/PresentForm">
        <button className="btn btn-primary"></button>
      </Link>
      <Inventory paint={response} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
};

export default PresentPage;
