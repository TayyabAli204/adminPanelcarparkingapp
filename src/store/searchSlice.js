import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'searchSlice',
    initialState:{distance:{Lat:20,Lng:30}},
    reducers:{
        setDistance:(state,actions)=>{
            state.distance.Lat=actions.payload.place?.geometry?.location?.lat();
           state.distance.Lng=actions.payload.place?.geometry?.location?.lng();
            console.log(actions.payload,'from slice ddddddddddddddddddddd');
        }
    }
})
export const {setDistance}=searchSlice.actions
export default searchSlice.reducer