import Expense from "../components/Expense"
import Sold from "../components/Sold"
import Profit from "../components/Profit"
import Report from "../components/Report"

const Dashboard = () => {
  return (
    <div className="d-flex justify-content-around g-3">
      <Sold Sold={100}/>
      <Expense Expense={100}/>
      <Profit Profit={100}/>
      <Report generate={() => console.log("Generating report")}/>
    </div>
  )
}

export default Dashboard;
