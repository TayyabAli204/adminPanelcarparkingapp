


import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './adminSlice'
import testSlice from './testSlice'
export const store = configureStore({
  
  reducer: {adminSlice,testSlice},
})