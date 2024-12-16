import React from 'react'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"




const sidebar = () => {
  return (
    <div className='sidebar'>
        <h2 className='subtitle'>Add Nodes</h2>

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