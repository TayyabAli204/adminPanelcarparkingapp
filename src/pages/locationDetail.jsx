import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLocationDataAsync } from "../store/adminSlice";

function locationDetail() {
  const { location } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.adminSlice);
  console.log(state, "paramsss");
  console.log(state.selectedLocation, "selectedLocation");
  useEffect(() => {
    if (location) {
      dispatch(getLocationDataAsync(location));
    }
  }, []);
  return (
    <>
      {state.loader ? <div>loading....</div>:<div>
        {
            state.selectedLocation.map((item)=>{
                return <div>
                    parkingLotName:{item.parkingLotName}
                    Booked-By:{item.userName}
                    entryTime:{item.entryTime}
                    perHourFee:{item.perHourFee}
                </div>
            })
        }
        </div>}
      
    </>
  );
}

export default locationDetail;
