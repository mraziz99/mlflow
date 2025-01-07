import { createSlice } from '@reduxjs/toolkit'
import { applyNodeChanges } from '@xyflow/react'






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
    },
    {
      id: '3',
      type: 'inputNode',
      data: {
        label : 'Sigmoid'
      },
      position: {x:180,y:550}
    },
    {
      id: '4',
      type: 'inputNode',
      data: {
        label : 'Sigmoid1'
      },
      position: {x:200,y:550}
    },
    {
      id: '5',
      type: 'inputNode',
      data: {
        label : 'Sigmoid2'
      },
      position: {x:220,y:550}
    },
    {
      id: '6',
      type: 'inputNode',
      data: {
        label : 'Sigmoid3'
      },
      position: {x:230,y:550}
    }
  ]


// di redux toolkit, klo mau mutate state langsung maka gaperlu return value di function reducernya ,
// klo mau ngebalikin array baru kayak method filter , maka make return value di function reducernya 


  export const nodeSlice = createSlice({
    name: 'node',
    initialState,
    reducers: {
        addNodes: (state,action) => {
          
          let max = _.maxBy(state, 'id')
          console.log('cekkk'+max)
          state.push({
            id: max.id+1,
            position : {
              x: Math.floor(Math.random() * (300 - 100 + 1)) + 100,
              y: Math.floor(Math.random() * (300 - 100 + 1)) + 100
            },
            ...action.payload

          })
          console.log(state)
        },
        deleteNodes: (state,action) => {

            return _.filter(state, (e) => {
                return e.id != action.payload
            })
        },

        nodesChange: (state,action) => {
          return [ ...applyNodeChanges(action.payload,state)]
        }

    }
  })



  export const { addNodes,deleteNodes,nodesChange } = nodeSlice.actions

  export default nodeSlice.reducer