import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSlotsDataAsync } from "../store/adminSlice";

const ParkingSpaceOverView = () => {
  const [calData, setCalculatedData] = useState([]);
  const availableParkingLocation = useSelector((state) => state.adminSlice);
  const dispatch = useDispatch();

  // console.log(
  //   calData.map((item) => {
  //     console.log(item.location, "ya item ha");
  //   }),
  //   "Faisal Hospital Faisalabad"
  // );

  useEffect(() => {
    dispatch(getSlotsDataAsync());
  }, []);
  useEffect(() => {
    let calculatedData = [];
    if (availableParkingLocation.parkingSlots.length > 0) {
      availableParkingLocation.parkingSlots.forEach((item) => {
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
  }, [availableParkingLocation.parkingSlots]);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Service Location List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {calData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-2">{item.location}</h3>
            <div className="flex items-center mb-2">
              <div className="w-1/2">
                <p className="text-gray-700 font-bold">Booked Slots:</p>
                <p>{item.bookedSlots}</p>
              </div>
              <div className="w-1/2">
                <p className="text-gray-700 font-bold">Available Slots:</p>
                <p>{item.AvailableSlots}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingSpaceOverView;
