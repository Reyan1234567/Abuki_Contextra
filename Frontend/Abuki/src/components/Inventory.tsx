import { Link } from "react-router-dom";


interface Paint {
  _id:string;
  paint_id: string;
  name: string;
  brand: string;
  color:string;
  notes:string;
}
interface Props {
  paint: Paint[];
  onDelete:(id:string)=>void
  onUpdate:(id:string)=>void
}
const Inventory = ({ paint, onDelete, onUpdate}: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
      <th>Paint id</th>
      <th>Name</th>
      <th>Brand</th>
      <th>Color</th>
      <th>Notes</th>
      <th> </th>
      </thead>
      <tbody>
        {paint.map((pain) => (
          <tr key={pain._id}>
            <td>{pain.paint_id}</td>
            <td>{pain.name}</td>
            <td>{pain.brand}</td>
            <td>{pain.color}</td>
            <td>{pain.notes}</td>
            <td>
                <Link to={`/InventoryForm/${pain._id}`}><button onClick={()=>{onUpdate(pain._id)}} className="btn btn-warning">Edit</button></Link>
                <button className="btn btn-danger" onClick={()=>onDelete(pain._id)}>Delete</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Inventory;
