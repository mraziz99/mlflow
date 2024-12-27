import React from 'react'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,

} from "@/components/ui/accordion"




const Preprocess = () => {




    
  return (
    <div>

        <AccordionRoot
          variant='enclosed'
          key='enclosed'
          collapsible
          defaultValue={["a"]}
          multiple

        >

          <AccordionItem key="a" value="a" >
            <AccordionItemTrigger>From file</AccordionItemTrigger>
            <AccordionItemContent>

              <div>

              </div>

            </AccordionItemContent>

                


          </AccordionItem>
          <AccordionItem key="b" value="b" >
          <AccordionItemTrigger>From Dream</AccordionItemTrigger>
          <AccordionItemContent>tess</AccordionItemContent>

          </AccordionItem>
          <AccordionItem key="c" value="c" >


          </AccordionItem>
        </AccordionRoot>
        

    </div>
  )
}

export default Preprocess