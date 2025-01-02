import { configureStore } from '@reduxjs/toolkit'
import nodeReducer from './nodeSlice'


export const store = () => {
    
  return configureStore({
      reducer: {
        nodes: nodeReducer
      },
    })
}


