import { configureStore } from '@reduxjs/toolkit'
import nodeReducer from './nodeSlice'
import edgeReducer from './edgeSlice'

export const store = () => {
    
  return configureStore({
      reducer: {
        nodes: nodeReducer,
        edges: edgeReducer
      },

      middleware: (getDefault) => {
        return getDefault({
          serializableCheck: false
        })
      }
    })
}


