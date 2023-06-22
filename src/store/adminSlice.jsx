import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

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
    //   state.parkingSlots = action.payload;
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
  const {data}=await axios.get('http://localhost:8000/parkingSlot');
  return data;
})
export const addLocationAsync=createAsyncThunk('adminSlice/addLocation', async(dispatchedData,thunkAPI)=>{

const data=await axios.post('http://localhost:8000/addLocation',{
  location:dispatchedData
});
console.log(data)
return ;
})
export const getLocationDataAsync=createAsyncThunk('adminSlice/getLocationData', async(location,thunkAPI)=>{

const {data}=await axios.get(`http://localhost:8000/parkingSlot/data/${location}`)
console.log(data)
return data.data ;
})
export default adminSlice.reducer;

  // const {data}=await axios.post('http://192.168.50.65:8000/parkingSlot',
  // );
  // return data;
