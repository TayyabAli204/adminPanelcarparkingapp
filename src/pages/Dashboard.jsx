import React from "react";
import Employeecards from "../components/cards/cards";
import LineChart from "../components/lineChart/lineChart";
import EmployeeStatu from "../components/employStatus/status";
import PieChart from "../components/pieChart/PieChart";
const Dashboard = () => {
  return (
    <>
      <div>
        <Employeecards />
        <LineChart />
        <div className="flex flex-col lg:flex-row mt-6 gap-6   items-center justify-center xl:justify-start xl:items-start  ">
          <EmployeeStatu />
          <PieChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
