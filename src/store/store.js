
import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './adminSlice'
import testSlice from './testSlice'
import searchSlice from './searchSlice'
import LoginSlice from './loginSlice'
import SignupSlice from './signupSlice'
const Store = configureStore({
  reducer: {
    adminSlice,
    LoginSlice,
    SignupSlice,
    testSlice,
    searchSlice
  },
});
export default Store;
