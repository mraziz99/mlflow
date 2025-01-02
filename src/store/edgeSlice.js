import { createSlice } from '@reduxjs/toolkit'
import { applyEdgeChanges } from '@xyflow/react'




const initialState = [
    {
        id: 'e1-2',source: '1', target: '2'
    }
  ]


// di redux toolkit, klo mau mutate state langsung maka gaperlu return value di function reducernya ,
// klo mau ngebalikin array baru kayak method filter , maka make return value di function reducernya 


  export const edgeSlice = createSlice({
    name: 'edge',
    initialState,
    reducers: {
        addEdge: (state,action) => {
          
          // state =  applyNodeChanges(state,action.payload)
        },
        deleteEdges: (state,action) => {

            return _.filter(state, (e) => {
                return e.id != action.payload
            })
        },

        edgesChange: (state,action) => {
          return [ ...applyEdgeChanges(action.payload,state)]
        }

    }
  })



  export const { addEdge,deleteEdges,edgesChange } = edgeSlice.actions

  export default edgeSlice.reducer