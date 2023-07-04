// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/sideBar/sidebar";
// import Dashboard from "./pages/Dashboard";
// import Booking from "./pages/Booking";
// import AddLocation from "./pages/AddLocation";
// import LocationDetail from "./pages/locationDetail";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Sidebar />
//         <div className="md:ml-[273px] !p-[25px]">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/DashBoard" element={<Dashboard />} />
//             <Route path="/Booking" element={<Booking />} />
//             <Route path="/AddLocation" element={<AddLocation />} />
//             <Route path="/location/:location" element={<LocationDetail />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Sidebar from "./components/sideBar/sidebar";
import Sidebar from "./components/sideBar/sidebar";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import AddLocation from "./pages/AddLocation";
import LocationDetail from "./pages/locationDetail";
import Payments from "./pages/Payments";
import ParkingSpaceOverView from "./pages/ParkingSpaceOverView";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer, toast } from "react-toastify";
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
              <div className="md:ml-[273px] !p-[25px]">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/DashBoard" element={<Dashboard />} />
                  <Route path="/Booking" element={<Booking />} />
                  <Route path="/AddLocation" element={<AddLocation />} />
                  <Route path="/Payments" element={<Payments />} />
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
