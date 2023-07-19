import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSlotsDataAsync } from "../store/adminSlice";

const ParkingSlots = () => {
  const { showLoader, parkingSlots } = useSelector((state) => state.adminSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSlotsDataAsync());
  }, []);

  const filterParkingBookedSlots = parkingSlots.filter(
    (obj) => obj.booked === true
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className=" min-h-screen md:min-w-[1000px] sm:overflow-x-visible">
        <h1 className="text-xl">All Bookings</h1>
      <div>
        <ul className="grid  grid-cols-6 gap-10 sm:gap-8 md:gap-4 sm:m-8 m-4   cursor-pointer text-gray-400 md:text-[16px] text-[12px]">
          <li className="">UserEmail</li>
          <li className="">Book</li>
          <li className="">Status</li>
          <li className="">BookedTime</li>
          <li className="">EntryTime</li>
          <li className="">PerHourFee</li>
        </ul>
      </div>
      {showLoader && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <div className="">
        {filterParkingBookedSlots?.map((item, index) => (
          <>
            <h2 className="sm:text-lg text-[14px] font-bold text-primary mb-2">
              {item.location}
            </h2>
            <div
              key={index}
              className="bg-white w-full shadow-lg rounded-md  grid grid-cols-6  sm:gap-8 md:gap-4 sm:m-8 m-4  cursor-pointer text-black text-[12px] md:text-[16px] p-4 mb-4"
            >
              <div className="text-primary  col-span-2 sm:col-span-1 text-start mb-1">
                {" "}
                {item.userName}
              </div>
              <div className="text-primary  text-start mb-1">
                {" "}
                {item.parkingLotName}
              </div>
              <div className="text-primary text-start mb-1">
                {item.booked ? "Booked" : "Not Booked"}
              </div>
              <div className="text-primary text-start mb-1">
                {" "}
                {formatDate(item.BookedTime)}
              </div>
              <div className="text-primary text-start mb-1">
                {" "}
                {formatDate(item.entryTime)}
              </div>
              <div className="text-primary text-start mb-1">
                {" "}
                {item.perHourFee}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ParkingSlots;
