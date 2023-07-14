import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {  toast } from "react-toastify";

const adminSlice = createSlice({
  name: 'adminSlice',
  initialState: {
    showLoader:false,
    showError:false,
    parkingSlots: [],
    selectedLocation:[]
  },

  reducers: {
    setParkingSlotData: (state, action) => {
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getSlotsDataAsync.pending,(state,action)=>{
      state.showLoader=true

    }).addCase(getSlotsDataAsync.fulfilled,(state,action)=>{
      state.showLoader=false
        state.parkingSlots=action.payload;

    }).addCase(getSlotsDataAsync.rejected,(state,action)=>{
      state.showLoader=false

    })
    .addCase(addLocationAsync.pending,(state,action)=>{
      state.showLoader=true

    }).addCase(addLocationAsync.fulfilled,(state,action)=>{
      state.showLoader=false

    }).addCase(addLocationAsync.rejected,(state,action)=>{
      state.showLoader=false

    })
    .addCase(getLocationDataAsync.pending,(state,action)=>{

      state.showLoader=true

    }).addCase(getLocationDataAsync.fulfilled,(state,action)=>{
      state.showLoader=false
      state.selectedLocation=action.payload

    }).addCase(getLocationDataAsync.rejected,(state,action)=>{
      state.showLoader=false

    })
  }
});
export const {setParkingSlotData} = adminSlice.actions;
export const getSlotsDataAsync=createAsyncThunk('adminSlice/slotsData', async(state,thunkAPI)=>{
  const {data}=await axios.get('https://long-jade-wasp-robe.cyclic.app/parkingSlot');
  return data;
})


export const addLocationAsync=createAsyncThunk('adminSlice/addLocation', async(dispatchedData,thunkAPI)=>{
try { 
  const data=await axios.post('https://long-jade-wasp-robe.cyclic.app/addLocation',{
    location:dispatchedData
  });
  toast.success('Successfully added')

  return data ;
} catch (error) {
  toast.error('something went wrong')

}
})
export const getLocationDataAsync=createAsyncThunk('adminSlice/getLocationData', async(location,thunkAPI)=>{

const {data}=await axios.get(`https://long-jade-wasp-robe.cyclic.app/parkingSlot/data/${location}`)
return data.data ;
})
export default adminSlice.reducer;


