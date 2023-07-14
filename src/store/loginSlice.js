import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { auth } from "../config/firebseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
const LoginSlice = createSlice({
  name: "Login",
  initialState: { success: false },
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAuth.fulfilled, (state, action) => {
      state.success = action.payload;
    });
  },
});
export const { setSuccess } = LoginSlice.actions;
export default LoginSlice.reducer;

export const loginAuth = createAsyncThunk(
  "loginAuth",
  async (dispatch) => {
    try {
      await signInWithEmailAndPassword(auth, dispatch.email, dispatch.password);
      toast.success("Successfully Login");
      return true;
    } catch (error) {
      toast.error("invalid Emial or password");
    }
  }
);
