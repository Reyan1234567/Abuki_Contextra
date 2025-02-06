interface Props{
    Sold:number;
}
const Sold = ({Sold}:Props) => {
  return (
    <div className="container p-3 bg-success text-white">
      Total Paint Sold <br/> {Sold}
    </div>
  )
}

export default Sold
