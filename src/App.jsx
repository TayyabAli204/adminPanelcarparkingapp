


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./components/sideBar/sidebar";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import AddLocation from "./pages/AddLocation";
import LocationDetail from "./pages/locationDetail";
import ParkingSpaceOverView from "./pages/ParkingSpaceOverView";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  
  return (
    <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/*"
          element={
            <>
              <Sidebar />
              <div className="md:ml-[273px] md:!p-[25px] p-[12px]">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/DashBoard" element={<Dashboard />} />
                  <Route path="/Booking" element={<Booking />} />
                  <Route path="/AddLocation" element={<AddLocation />} />
                  <Route path="/ParkingSpaceOverView" element={<ParkingSpaceOverView/>}/>
                  <Route path="/location/:location" element={<LocationDetail />} />
                </Routes>
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
  
  );
};

export default App;
