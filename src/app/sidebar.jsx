import React from 'react'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"
import { Tabs  } from "@chakra-ui/react"
import { LuUser,LuFolder } from 'react-icons/lu'





const sidebar = () => {
  return (
    <div className='sidebar'>
        <h2 className='subtitle'>Add Nodes</h2>

        <Tabs.Root defaultValue="members" fitted variant="plain" rounded='lg'>
          <Tabs.List bg="bg.muted" rounded="lg" p="2" >
            <Tabs.Trigger value="members" >
              <LuUser />
              Membe
            </Tabs.Trigger>
            <Tabs.Trigger value="projects">
              <LuFolder />
              Projects
            </Tabs.Trigger>
            <Tabs.Trigger value="tasks">
              <LuUser />
              Settings
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2"  />
          </Tabs.List>
          <Tabs.Content value="members">Manage your team members</Tabs.Content>
          <Tabs.Content value="projects">Manage your projects</Tabs.Content>
          <Tabs.Content value="tasks">
            Manage your tasks for freelancers
          </Tabs.Content>
        </Tabs.Root>

        <AccordionRoot
          varian='enclosed'
          key='closed'
          collapsible
          defaultValue={["a"]}
          multiple
        >

          <AccordionItem key="a" value="a" >

          </AccordionItem>
          <AccordionItem key="b" value="b" >


          </AccordionItem>
          <AccordionItem key="c" value="c" >


          </AccordionItem>
        </AccordionRoot>

    </div>
  )
}

export default sidebar