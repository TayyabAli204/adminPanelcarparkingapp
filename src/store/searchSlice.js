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
        console.log("if wali chali form sclice");
      } else {
        console.log("else wali chali form sclice");

        state.formatedAddress = actions.payload.place?.formatted_address;
        state.distance.lat = actions.payload.place.geometry?.location.lat();
        state.distance.lng = actions.payload.place.geometry?.location.lng();
        console.log(
          actions.payload.place?.formatted_address,
          "from slice ddddddddddddddddddddd"
        );
        console.log(
          actions.payload.place.geometry?.location,
          "fffffffffffffffffffffffffffffffffflajflksjfkjsdlkf"
        );
      }
    },
    // setDistance: (state, action) => {
    // },
  },
});
export const { setDistance, setLocation } = searchSlice.actions;
export default searchSlice.reducer;
