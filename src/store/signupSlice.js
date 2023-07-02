import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from '../config/firebseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
const SignupSlice = createSlice({
  name: "Signup",
  initialState: { success: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignupAuth.fulfilled, (state, action) => {
      state.success = action.payload;
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
        dispatch.password
      );
      toast.success("SignUp Successfully");
      return true;
    } catch (error) {
      toast.error("error");
    }
  }
);
