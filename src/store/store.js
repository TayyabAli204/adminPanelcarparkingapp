


import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './adminSlice'
import testSlice from './testSlice'
import searchSlice from './searchSlice'
export const store = configureStore({
  
  reducer: {adminSlice,searchSlice},
})