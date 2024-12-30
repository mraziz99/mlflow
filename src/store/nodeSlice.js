import { createSlice } from '@reduxjs/toolkit'




const initialState = [
    {
      id: '1',
      type : 'input',
      data: {
        label: 'input node'
      },
      position: {x:200,y:200}
    },
    {
      id: '2',
      data : {
        label : 'Default'
      },
      position: {x:150,y:350}
    }
  ]


// di redux toolkit, klo mau mutate state langsung maka gaperlu return value di function reducernya ,
// klo mau ngebalikin array baru kayak method filter , maka make return value di function reducernya 


  export const nodeSlice = createSlice({
    name: 'node',
    initialState,
    reducers: {
        addNodes: (state,action) => {
            state.push(action.payload)
        },
        deleteNodes: (state,action) => {

            return _.filter(state, (e) => {
                return e.id != action.payload
            })
        }

    }
  })



  export const { addNodes,deleteNodes } = nodeSlice.actions

  export default nodeSlice.reducer