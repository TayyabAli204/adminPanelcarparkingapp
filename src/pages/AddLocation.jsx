import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocationAsync } from "../store/adminSlice";
import { Link } from "react-router-dom";
import SimpleMap from "../components/GoogleMap/MapHomeScreen";
import SearchBar from "../components/searchBar/SearchBar";
import { setDistance, setLocation } from "../store/searchSlice";
const AddLocation = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [formData, setFormData] = useState("");
  const location = useSelector((state) => state.searchSlice.formatedAddress);
  console.log(location, "location form slice");
  const distance = useSelector((state) => state.searchSlice.distance.lat);
  useEffect(() => {
    setFormData(location);
  }, [location]);
  const dispatch = useDispatch();
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="container flex justify-around m-4 ">
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
              dispatch(setLocation(""));
              window.pacInput = document.getElementById("pac-input");
              window.pacInput.value = "";
            }}
          >
            Add Location
          </button>
        </div>

        <SimpleMap />
      </div>
    </>
  );
};

export default AddLocation;
