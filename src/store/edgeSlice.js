import { createSlice } from '@reduxjs/toolkit'
import { applyEdgeChanges } from '@xyflow/react'
import { addEdge } from '@xyflow/react'



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
        newEdge: (state,action) => {
          console.log('berhasil trigger')
          return [ ...addEdge({ ...action.payload , animated: true}, state) ]
          
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



  export const { newEdge,deleteEdges,edgesChange } = edgeSlice.actions

  export default edgeSlice.reducer