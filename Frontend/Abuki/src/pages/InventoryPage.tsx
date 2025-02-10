import axios from "axios";
import Inventory from "../components/Inventory";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const InventoryPage = () => {
const[data,setData]=useState([])
useEffect(()=>{
  const envy=async()=>{
    const response = await axios.get("http://localhost:9000/api/inventory");
    setData(response.data)
  }
  envy()
},[data])
    const onDelete = async (_id: string) => {
      setData(data.filter((id: string) => id !== _id))
      axios.delete(`http://localhost:9000/api/inventory/${_id}`);
    };
    const onUpdate = async (_id:string) => {
      return await axios.get(`http://localhost:9000/api/inventory/${_id}`);
    };
  return (
    <div>
      <Link to="/InventoryForm">
        <button className="btn btn-primary">Add</button>
      </Link>
      <Inventory paint={data} onDelete={(data)=>onDelete(data)} onUpdate={(id)=>onUpdate(id)} />
    </div>
  );
};

export default InventoryPage;
