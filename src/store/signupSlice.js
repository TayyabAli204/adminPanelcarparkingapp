import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from '../config/firebseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  toast } from "react-toastify";
const SignupSlice = createSlice({
  name: "Signup",
  initialState: { success: false },
  reducers: {
    setName:(state,dispatch)=>{

    }
  },
  extraReducers: (builder) => {
    builder.addCase(SignupAuth.fulfilled, (state, action) => {
      state.success = action.payload;
      console.log(action.payload,"done");
    });
  },
});
export default SignupSlice.reducer;
export const SignupAuth = createAsyncThunk(
  "signupAuthentication",
  async (dispatch, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        dispatch.email,
        dispatch.password,
        dispatch.displayName
      );
      toast.success("SignUp Successfully");
      return true;
    } catch (error) {
      toast.error("error");
    }
  }
);
