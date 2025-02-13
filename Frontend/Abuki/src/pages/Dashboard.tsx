import Expense from "../components/Expense";
import Sold from "../components/Sold";
import Profit from "../components/Profit";
import Report from "../components/Report";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="metrics-container">
          <Sold Sold={100} />
          <Expense Expense={100} />
          <Profit Profit={100} />
        </div>
        <div className="chart-container">
          <div className="chart-placeholder"></div>
        </div>
        <Report generate={() => console.log("Generating report")} />
      </div>
    </>
  );
};

export default Dashboard;