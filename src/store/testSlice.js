import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// Create slice
const testSlice = createSlice({
  name: "test",
  initialState: {
    num: 1,
  },
  reducers: {
    doIncrement: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(testThunk.pending, (state, action) => {
        console.log("testThunk pending");

      })
      .addCase(testThunk.fulfilled, (state, action) => {
        state.num = action.payload;
        console.log("testThunk fulfilled", action.payload);
      })
      .addCase(testThunk.rejected, (state, action) => {
        state.num = action.payload;
        console.log("testThunk rejected");
      })
      .addCase(testThunk1.pending, (state, action) => {
        console.log("testThunk pending");

      })
      .addCase(testThunk1.fulfilled, (state, action) => {
        state.num = action.payload;
        console.log("testThunk fulfilled", action.payload);
      })
      .addCase(testThunk1.rejected, (state, action) => {
        state.num = action.payload;
        console.log("testThunk rejected");
      });
  
  },
});

export const { doIncrement } = testSlice.actions;
export default testSlice.reducer;



export const testThunk = createAsyncThunk("thunk", async (dispatch) => {
    try {
      console.log(dispatch, "from thunk");
      return dispatch;
    } catch (error) {
      console.log(error);
    }
  });

  export const testThunk1 = createAsyncThunk("thunk1", async (dispatch) => {
    try {
      console.log(dispatch, "from thunk");
      
      return dispatch;
    } catch (error) {
      console.log(error);
    }
  });
  