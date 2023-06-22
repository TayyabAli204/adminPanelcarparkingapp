import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector
 } from 'react-redux';
 import {addLocationAsync, getSlotsDataAsync} from '../store/adminSlice';
import { Link } from 'react-router-dom';

const AddLocation = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [calData,setCalculatedData]=useState([])
  const state=useSelector(state=>state.adminSlice)
  // console.log(state,'stateeeeeee')
  const [parkingSlots, setParkingSlots] = useState([]);
  const [formData, setFormData] = useState('');
  const dispatch = useDispatch();
  const [data,setData]=useState()
 useEffect(()=>{
  dispatch(getSlotsDataAsync())
 },[])
useEffect(()=>{
  let calculatedData=[]
  if(state.parkingSlots.length>0){
  state.parkingSlots.forEach((item)=>{
    const locatinInfo=calculatedData.find(dataItem=>dataItem?.location==item?.location)
    const index = calculatedData.findIndex(dataItem => dataItem?.location === item?.location);

    if(locatinInfo){
  calculatedData.splice(index,1,{
    location:item.location,
    bookedSlots:item.booked?locatinInfo.bookedSlots+1:locatinInfo.bookedSlots,
    AvailableSlots:!item.booked?locatinInfo.AvailableSlots+1:locatinInfo.AvailableSlots,

  })
}else{
  calculatedData.push({
  location:item.location,
  bookedSlots:item.booked?1:0,
  AvailableSlots:!item.booked?1:0,
})
}


})
setCalculatedData(calculatedData)
}

 },[state.parkingSlots])
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
{
  calData.map((item)=>{
    return  <Link to={`/location/${item.location}`}>
    <div style={{
      backgroundColor:"red",
      marginBottom:10,

    }} onClick={()=>{
// dispatch      
    }}>
      location:{item.location}
      bookedSlots:{item.bookedSlots}
      AvailableSlots:{item.AvailableSlots}
    </div>
    </Link>
  })
}
    </div>
  );
};

export default AddLocation;

