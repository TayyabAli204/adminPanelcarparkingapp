import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocationAsync, getSlotsDataAsync } from "../store/adminSlice";
import { Link } from "react-router-dom";
import SimpleMap from "../components/GoogleMap/MapHomeScreen";
import ToastMassage from "../components/ToastMassage";
import { toast } from "react-toastify";
const AddLocation = () => {

  const [calData, setCalculatedData] = useState([]);
  const state = useSelector((state) => state.adminSlice);
  const [parkingSlots, setParkingSlots] = useState([]);
  const [formData, setFormData] = useState("");
  const dispatch = useDispatch();
  
console.log(calData.map((item)=>{console.log(item.location,"ya item ha")}),"Faisal Hospital Faisalabad")
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  useEffect(() => {
    dispatch(getSlotsDataAsync());
  }, []);
  useEffect(() => {
    let calculatedData = [];
    if (state.parkingSlots.length > 0) {
      state.parkingSlots.forEach((item) => {
        const locatinInfo = calculatedData.find(
          (dataItem) => dataItem?.location == item?.location
          );
          // console.log(locatinInfo)
        const index = calculatedData.findIndex(
          (dataItem) => dataItem?.location === item?.location
        );
        // console.log(index)


        if (locatinInfo) {
          calculatedData.splice(index, 1, {
            location: item.location,
            bookedSlots: item.booked ? locatinInfo.bookedSlots + 1: locatinInfo.bookedSlots,
            AvailableSlots: !item.booked
              ? locatinInfo.AvailableSlots + 1
              : locatinInfo.AvailableSlots,
          });
        } else {
          calculatedData.push({
            location: item.location,
            bookedSlots: item.booked ? 1 : 0,
            AvailableSlots: !item.booked ? 1 : 0,
          });
        }
      });
      setCalculatedData(calculatedData);
    }
  }, [state.parkingSlots]);



  const [validationError, setValidationError] = useState("");

// Function to validate the location format
const validateLocation = (locations) => {
  // Regular expression pattern for a valid location (you can modify it according to your requirements)
  const locationPattern = /^[A-Za-z0-9\s'-]+(,\s[A-Za-z0-9\s'-]+)*$/;

  if (!locationPattern.test(locations)) {
    setValidationError("Please enter a valid location (e.g., City, Country)");
    return false;
  }
  

  setValidationError("");
  return true;
};
  return (
    <>
    <div className="container flex justify-around m-4 ">
      <ToastMassage/>
      {/* {showLoader &&  <div className="fixed inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>} */}
      <div className="flex gap-5 justify-start items-start flex-col">
        <h1>Are you a car rider or a parking spaces provider?</h1>
        <button
        onClick={() => handleClick('carRider')}
        className={`text-center border border-black px-6 py-1 ${activeButton === 'carRider' ? 'bg-[#5932EA] text-white' : ''}`}
      >
        I am a car rider
      </button>
      <button
        onClick={() => handleClick('carParking')}
        className={`text-center border border-black px-6 py-1 ${activeButton === 'carParking' ? 'bg-[#5932EA] text-white' : ''}`}
      >
        I provide car parking spaces
      </button>
        <h1>Add your first parking space</h1>
      
        {validationError && <p className="text-red-500">{validationError}</p>}
      <input
        type="text"
        onChange={(e) => setFormData(e.target.value)}
        value={formData}
        placeholder="Enter your Parking Location"
        className="px-3 list-none border-none w-[300px]"
      /> 
      <button className="text-center text-white  bg-[#5932EA] px-6 py-1"
         onClick={() => {
          if (formData.trim() !== "") {
            if (validateLocation(formData)) {
              dispatch(addLocationAsync(formData));
              toast.success('Your Location Successfully Added', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          } else {
            alert("Please enter a location");
          }
        }}
      >
        Add Location
      </button>
      </div>
    

      <SimpleMap/>
</div>
<div className="bg-gray-100 min-h-screen">
  <div className="max-w-2xl mx-auto py-8">
    <h1 className="text-3xl font-bold text-center mb-8">Available Locations</h1>
    {calData.map((item, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-md p-6 mb-6"
      >
        <h2 className="text-xl font-bold mb-4">{item.location}</h2>
        <div className="flex justify-between">
          <p className="text-gray-600">Booked Slots: {item.bookedSlots}</p>
          <p className="text-gray-600">Available Slots: {item.AvailableSlots}</p>
        </div>
      </div>
    ))}
  </div>
</div>





  
</>
  );
};

export default AddLocation;
