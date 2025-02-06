interface Paint {
  id: string;
  name: string;
  price: number;
}
interface Props {
  paint: Paint[];
}
const Present = ({ paint }: Props) => {
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Present;
