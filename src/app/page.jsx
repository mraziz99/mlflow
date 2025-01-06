'use client'

import {useState, useCallback} from 'react'
import { Background, 
  ReactFlow,
  Controls } from '@xyflow/react';
import Sidebar from './sidebar';
import { useSelector, useDispatch } from 'react-redux'
import { nodesChange } from '../store/nodeSlice';
import { edgesChange,newEdge } from '@/store/edgeSlice';
import {inputNode} from '../components/nodeTypes/inputNode'


import '@xyflow/react/dist/style.css';



export default function Home() {


  const {nodes,edges} = useSelector((state) => state) 


  const dispatch = useDispatch()


  const onNodeChange = useCallback(
    (changes) => dispatch(nodesChange(changes)),
    [dispatch],
  )

  const nodeTypes= {
    inputNode: inputNode
  }

  const onEdgeChange = useCallback(
    (changes) => dispatch(edgesChange(changes)),
    [dispatch],
  )

  const onConnect = useCallback(
    (changes) => dispatch(newEdge(changes)),
    [dispatch]
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
        <Sidebar />
        <ReactFlow 
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onNodesChange={onNodeChange}
          onEdgesChange={onEdgeChange}
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
        </ReactFlow>
           
      </div>
  );



}
