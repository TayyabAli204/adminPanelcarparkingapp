import React from "react";
import { useEffect } from "react";
import Employeecards from "../components/cards/cards";
import LineChart from "../components/lineChart/lineChart";
import EmployeeStatu from "../components/employStatus/status";
import PieChart from "../components/pieChart/PieChart";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebseConfig";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // return
        // setId(user.uid);
        // setSignin(true);
        // const parts = user.email.split("@");
        // setName(parts[0]);
      } else {
        navigate("/login");

      }
    });
  }, []);
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
