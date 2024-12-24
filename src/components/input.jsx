import React from 'react'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"


const Input = () => {
  return (
    <div className='p-10'>
        <AccordionRoot
          varian='enclosed'
          key='closed'
          collapsible
          defaultValue={["a"]}
          multiple
        >

          <AccordionItem key="a" value="a" >
            <AccordionItemTrigger>From file</AccordionItemTrigger>
            <AccordionItemContent>Manual Input</AccordionItemContent>

          </AccordionItem>
          <AccordionItem key="b" value="b" >


          </AccordionItem>
          <AccordionItem key="c" value="c" >


          </AccordionItem>
        </AccordionRoot>
        
    </div>
  )
}

export default Input