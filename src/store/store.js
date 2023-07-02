


import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './adminSlice'
import testSlice from './testSlice'
import searchSlice from './searchSlice'
import LoginSlice from './LoginSlice'
import SignupSlice from './SignupSlice'
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
