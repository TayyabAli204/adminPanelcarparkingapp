import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: { formatedAddress: "", distance: { lat: null, lng: null } },
  reducers: {
    setLocation: (state, actions) => {
      if (actions.payload === "") {
        state.formatedAddress = "";
        state.distance.lat = null;
        state.distance.lng = null;
      } else {

        state.formatedAddress = actions.payload.place?.formatted_address;
        state.distance.lat = actions.payload.place.geometry?.location.lat();
        state.distance.lng = actions.payload.place.geometry?.location.lng();
        
      }
    },
   
  },
});
export const { setDistance, setLocation } = searchSlice.actions;
export default searchSlice.reducer;
