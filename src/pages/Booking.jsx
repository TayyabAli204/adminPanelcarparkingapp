
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSlotsDataAsync } from '../store/adminSlice';


const ParkingSlots = () => {
  const { showLoader, parkingSlots } = useSelector(state => state.adminSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSlotsDataAsync());
  }, []);

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
        <ul className='flex justify-start m-8 items-center gap-44  cursor-pointer text-gray-400 text-[16px]'>
            <li>Book</li>
            <li>Status</li>
            <li>Type</li>
            <li>Start Date</li>
            <li>End Date</li>
        </ul>
    </div>
      {showLoader && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <div className="container mx-auto p-4">
        {parkingSlots?.map((item, index) => (
            <>
            <h2 className="text-lg font-bold text-primary mb-2">{item.location}</h2>
            <div className="bg-white w-full shadow-lg rounded-md flex justify-start  items-center gap-44  cursor-pointer text-black text-[16px] p-4 mb-4" key={index}>
            <p className="text-primary text-start mb-1"> {item.parkingLotName}</p>
            <p className="text-primary text-start mb-1">{item.booked ? 'Booked' : 'Not Booked'}</p>
            <p className="text-primary text-start mb-1"> {item.parkingSpaceNumber}</p>
            <p className="text-primary text-start mb-1"> {formatDate(item.entryTime)}</p>
            <p className="text-primary text-start mb-1">{formatDate(item.bookedTime)}</p>
          </div>
            </>
        ))}
      </div>
    </div>
  );
};

export default ParkingSlots;
