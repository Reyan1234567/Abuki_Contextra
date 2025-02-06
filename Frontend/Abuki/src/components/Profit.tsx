interface Props{
    Profit:number;
}
const Profit = ({Profit}:Props) => {
  return (
    <div className="container p-3 bg-success text-white">
      Total Profit <br/> {Profit}
    </div>
  )
}

export default Profit