import React,{useEffect,useState} from 'react'

import { Tabs  } from "@chakra-ui/react"
import { LuUser,LuFolder,LuFileInput  } from 'react-icons/lu'
import Input from '@/components/input'
import {  Button } from '@/components/ui/button'
import Preprocess from '@/components/preprocess'
import {addNodes} from '../store/nodeSlice'
import { useDispatch } from 'react-redux'


const sidebar = () => {


  const [valueTabs, setvalueTabs] = useState('input')

  const dispatch = useDispatch()
  


  return (
    <div className='sidebar'>

        <Button 
            borderRadius='6px'
            bg='green.700'
            size='lg'
            variant='solid'
            p='2'
            className='absolute bottom-3 right-5 left-5'
        >
          Spawn Selected Nodes
        </Button>

        <h2 className='subtitle'>Add Nodes</h2>
        <Tabs.Root colorPalette='gray' defaultValue="input" fitted variant="plain" rounded='lg'>
          <Tabs.List bg='green.100' rounded="lg" p="2" >
            <Tabs.Trigger value='input' _selected={{color:'white'}}  >
              <LuFileInput />
              Input
            </Tabs.Trigger>
            <Tabs.Trigger value='process' _selected={{color:'white'}} >
              <LuFolder />
              Process
            </Tabs.Trigger>
            <Tabs.Trigger value='model' _selected={{color:'white'}} >
              <LuUser />
              Model
            </Tabs.Trigger>
            <Tabs.Indicator bg='green.700' rounded="l3"  />
          </Tabs.List>
          <Tabs.Content value="input"><Input /></Tabs.Content>
          <Tabs.Content value="process"> <Preprocess /> </Tabs.Content>
          <Tabs.Content value="model">
            Disini List Model
          </Tabs.Content>
        </Tabs.Root>

        

    </div>
  )
}

export default sidebar