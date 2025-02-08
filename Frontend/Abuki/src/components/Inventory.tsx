import { Link } from "react-router-dom";


interface Paint {
  id: string;
  name: string;
  price: number;
}
interface Props {
  paint: Paint[];
  onDelete:(id:string)=>void
  onUpdate:(id:string)=>void
}
const Inventory = ({ paint, onDelete, onUpdate}: Props) => {
  return (
    <table className="table">
      <thead>
        <th scope="col">name</th>
        <th scope="col">price</th>
      </thead>
      <tbody>
        {paint.map((pain) => (
          <tr>
            <td>{pain.name}</td>
            <td>{pain.price}</td>
            <td>
                <Link to="/InventoryForm/:id"><button onClick={()=>{onUpdate(pain.id)}} className="btn btn-warning">Edit</button></Link>
                <button className="btn btn-danger" onClick={()=>onDelete(pain.id)}>Delete</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Inventory;
