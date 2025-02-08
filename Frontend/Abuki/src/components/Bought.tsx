import { Link } from "react-router-dom";

interface Paint {
    id: string;
    name: string;
    price: number;
  }
  interface Props {
    paint: Paint[];
    onDelete:()=>void
  }
  const Bought = async ({ paint, onDelete }: Props) => {

    return (
      <table className="table">
        <thead>
          <th scope="col">name</th>
          <th scope="col">price</th>
        </thead>
        <tbody>
          {paint.map((pain:Paint) => (
            <tr>
              <td>{pain.name}</td>
              <td>{pain.price}</td>
              <td>
                <Link to="/BoughtForm"><button className="btn btn-warning">Edit</button></Link>
                <button className="btn btn-danger" onClick={()=>onDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Bought;
  