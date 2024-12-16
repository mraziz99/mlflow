'use client'

import {useState, useCallback} from 'react'
import { Background, 
  ReactFlow,addEdge,
  applyEdgeChanges,
  applyNodeChanges,Controls } from '@xyflow/react';
import Sidebar from './sidebar';

import '@xyflow/react/dist/style.css';



export default function Home() {


  const [nodes, setnodes] = useState([
    {
      id: '1',
      type : 'input',
      data: {
        label: 'input node'
      },
      position: {x:200,y:20}
    },
    {
      id: '2',
      data : {
        label : 'Default'
      },
      position: {x:150,y:35}
    }
  ])

  const [edges, setedges] = useState([
    {
      id: 'e1-2',source: '1', target: '2'
    }
  ])



  const onNodeChange = useCallback(
    (changes) => setnodes((nds) => applyNodeChanges(changes, nds)),
    [setnodes],
  )



  const onEdgeChange = useCallback(
    (changes) => setedges((eds) => applyEdgeChanges(changes, eds)),
    [setedges],
  )




  return (
    <div className="w-[100vw] h-[100vh] relative" >
      <div className="navbar">
        <h2 className="title">ML Flow App</h2>

      </div>
      <Sidebar />
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
