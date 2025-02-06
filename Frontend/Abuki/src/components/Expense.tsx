interface Props{
  Expense:number;
}
const Expense = ({Expense}:Props) => {
return (
  <div className="container p-3 bg-success text-white">
    Total Cost<br/> {Expense}
  </div>
)
}

export default Expense