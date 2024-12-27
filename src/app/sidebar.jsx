import React from 'react'

import { Tabs  } from "@chakra-ui/react"
import { LuUser,LuFolder,LuFileInput  } from 'react-icons/lu'
import Input from '@/components/input'
import {  Button } from '@/components/ui/button'
import Preprocess from '@/components/preprocess'


const sidebar = () => {



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
        <Tabs.Root defaultValue="members" fitted variant="plain" rounded='lg'>
          <Tabs.List bg="bg.muted" rounded="lg" p="2" >
            <Tabs.Trigger value="members" >
              <LuFileInput />
              Input
            </Tabs.Trigger>
            <Tabs.Trigger value="projects">
              <LuFolder />
              Process
            </Tabs.Trigger>
            <Tabs.Trigger value="tasks">
              <LuUser />
              Model
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2"  />
          </Tabs.List>
          <Tabs.Content value="members"><Input /></Tabs.Content>
          <Tabs.Content value="projects"> <Preprocess /> </Tabs.Content>
          <Tabs.Content value="tasks">
            Manage your tasks for freelancers
          </Tabs.Content>
        </Tabs.Root>

        

    </div>
  )
}

export default sidebar