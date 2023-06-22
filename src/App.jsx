
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sideBar/sidebar";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import  AddLocation  from "./pages/AddLocation";
import LocationDetail from "./pages/locationDetail";
function App() {
  return (
    <>
  
<BrowserRouter>
   
      <Sidebar/>
        <div className="md:ml-[273px] !p-[25px]">
      <Routes>

        <Route path='/DashBoard' element={<Dashboard/>} />
        <Route path='/Booking' element={<Booking />} />
        <Route path='/AddLocation' element={<AddLocation />} />
        <Route path='/location/:location' element={<LocationDetail />} />

        
      </Routes>
        </div>
    </BrowserRouter>
      
     
    </>
  );
}

export default App;

