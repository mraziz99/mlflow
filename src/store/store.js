import { configureStore } from '@reduxjs/toolkit'
import nodeReducer from './nodeSlice'


export const store = configureStore({
  reducer: {
    nodes: nodeReducer
  },
})


