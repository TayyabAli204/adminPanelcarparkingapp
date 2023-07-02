import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocationAsync, getSlotsDataAsync } from "../store/adminSlice";
import { Link } from "react-router-dom";
import SimpleMap from "../components/GoogleMap/MapHomeScreen";
import ToastMassage from "../components/ToastMassage";
import { toast } from "react-toastify";
import SearchBar from "../components/searchBar/SearchBar";
import { setDistance, setLocation } from "../store/searchSlice";
const AddLocation = () => {
  const [calData, setCalculatedData] = useState([]);
  const state = useSelector((state) => state.adminSlice);
  const location = useSelector((state) => state.searchSlice.formatedAddress);
  const distance = useSelector((state) => state.searchSlice.distance.lat);

  console.log(location, "location form slice");
  const [formData, setFormData] = useState("");
  const dispatch = useDispatch();

  console.log(
    calData.map((item) => {
      console.log(item.location, "ya item ha");
    }),
    "Faisal Hospital Faisalabad"
  );
  const [activeButton, setActiveButton] = useState(null);
  useEffect(() => {
    setFormData(location);
  }, [location]);
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
            bookedSlots: item.booked
              ? locatinInfo.bookedSlots + 1
              : locatinInfo.bookedSlots,
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

  return (
    <>
      <div className="container flex justify-around m-4 ">
        <ToastMassage />
        <div className="flex gap-5 justify-start items-start flex-col">
          <h1>Are you a car rider or a parking spaces provider?</h1>
          <button
            onClick={() => handleClick("carRider")}
            className={`text-center border border-black px-6 py-1 ${
              activeButton === "carRider" ? "bg-[#5932EA] text-white" : ""
            }`}
          >
            I am a car rider
          </button>
          <button
            onClick={() => handleClick("carParking")}
            className={`text-center border border-black px-6 py-1 ${
              activeButton === "carParking" ? "bg-[#5932EA] text-white" : ""
            }`}
          >
            I provide car parking spaces
          </button>
          <h1>Add your first parking space</h1>
          <SearchBar />
          <button
            disabled={distance === null ? true : false}
            className="text-center text-white  bg-[#5932EA] px-6 py-1"
            onClick={() => {
                dispatch(addLocationAsync(formData));
                dispatch(setLocation(''));
                window.pacInput = document.getElementById("pac-input")
                window.pacInput.value = "";
               
                
              
            }}
          >
            Add Location
          </button>
        </div>

        <SimpleMap />
      </div>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-2xl mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Available Locations
          </h1>
          {calData.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">{item.location}</h2>
              <div className="flex justify-between">
                <p className="text-gray-600">
                  Booked Slots: {item.bookedSlots}
                </p>
                <p className="text-gray-600">
                  Available Slots: {item.AvailableSlots}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddLocation;
