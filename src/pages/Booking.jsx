
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSlotsDataAsync } from '../store/adminSlice';


const ParkingSlots = () => {
  const { showLoader, parkingSlots } = useSelector(state => state.adminSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSlotsDataAsync());
  }, []);

  const filterParkingBookedSlots = parkingSlots.filter((obj)=>obj.booked === true)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    
    <div className=" min-h-screen">
         <div className=''>
        <h1 className='text-xl'>All Bookings</h1>
    </div>
    <div>
        <ul className='grid grid-cols-6 gap-4 m-8   cursor-pointer text-gray-400 text-[16px]'>
            <li>UserEmail</li>
            <li>Book</li>
            <li>Status</li>
            <li>BookedTime</li>
            <li>EntryTime</li>
            <li>PerHourFee</li>

        </ul>
    </div>
      {showLoader && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <div className="container  mx-auto p-4">
        {filterParkingBookedSlots?.map((item, index) => (
            <>
            <h2 className="text-lg font-bold text-primary mb-2">{item.location}</h2>
            <div key={index} className="bg-white w-full shadow-lg rounded-md  grid grid-cols-6 gap-4  cursor-pointer text-black text-[16px] p-4 mb-4">
            <div className="text-primary text-start mb-1"> {item.userName}</div>
            <div className="text-primary text-start mb-1"> {item.parkingLotName}</div>
            <div className="text-primary text-start mb-1">{item.booked ? 'Booked' : 'Not Booked'}</div>
            <div className="text-primary text-start mb-1"> {formatDate(item.BookedTime)}</div>
            <div className="text-primary text-start mb-1"> {formatDate(item.entryTime)}</div>
            <div className="text-primary text-start mb-1">  {item.perHourFee}</div>


          </div>
            </>
        ))}
      </div>
    </div>
  );
};

export default ParkingSlots;
