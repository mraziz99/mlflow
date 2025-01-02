'use client'

import {useState, useCallback} from 'react'
import { Background, 
  ReactFlow,addEdge,
  applyEdgeChanges,
  applyNodeChanges,Controls } from '@xyflow/react';
import Sidebar from './sidebar';
import { useSelector, useDispatch } from 'react-redux'
import { addNodes } from '../store/nodeSlice';



import '@xyflow/react/dist/style.css';



export default function Home() {


  const nodes = useSelector((state) => state.nodes) 

  const dispatch = useDispatch()

  // const [nodes, setnodes] = useState([
  //   {
  //     id: '1',
  //     type : 'input',
  //     data: {
  //       label: 'input node'
  //     },
  //     position: {x:200,y:200}
  //   },
  //   {
  //     id: '2',
  //     data : {
  //       label : 'Default'
  //     },
  //     position: {x:150,y:350}
  //   }
  // ])


  const [edges, setedges] = useState([
    {
      id: 'e1-2',source: '1', target: '2'
    }
  ])



  const onNodeChange = useCallback(
    (changes) => dispatch(addNodes((nds) => applyNodeChanges(changes, nds)))
    [dispatch],
  )

 

  const onEdgeChange = useCallback(
    (changes) => setedges((eds) => applyEdgeChanges(changes, eds)),
    [setedges],
  )



  // const addNodes = (id,data) => {

  //   setnodes(nodes.push({
  //     id,
  //     data,
  //     position : {
  //       x: 200,
  //       y:200
  //     }
  //   }))

  // }



  return (

      <div className="w-[100vw] h-[100vh] relative" >
        <div className="navbar">
          <h2 className="title">ML Flow App</h2>

        </div>
        <Sidebar addNodes={addNodes} />
        <ReactFlow 
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodeChange}
          onEdgesChange={onEdgeChange}
        >
          <Background />
          <Controls />
        </ReactFlow>
        
      </div>
  );



}
