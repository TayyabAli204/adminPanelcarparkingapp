import React, { useState } from 'react';
import { useDispatch
 } from 'react-redux';
 import {addLocationAsync} from '../store/adminSlice';
import Test from '../hooks/Test'
const AddLocation = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [parkingSlots, setParkingSlots] = useState([]);
  const [formData, setFormData] = useState('');
  const dispatch = useDispatch();
 

  return (
    <div className="container">
      <Test/>
      {showLoader && <div className="loader">Loading...</div>}

      <button onClick={() =>dispatch(addLocationAsync(formData))}>Add Location</button>

      <input
        type="text"
        onChange={(e) => setFormData(e.target.value)}
        value={formData}
        className="txtInp"
      />
    </div>
  );
};

export default AddLocation;

