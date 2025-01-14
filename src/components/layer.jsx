'use client'

import React from 'react'
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
  
  } from "@/components/ui/accordion"




const layer = () => {



    const ann = [
        {
            id: '3a',
            label : 'Neuron',
            data: {
                nodeId: '3a',
                
            }
        }
    ]


    const recurrent  = [
        {

        }
    ]



    const convol = [
        {

        }
    ]




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
                <AccordionItemTrigger>Neuron Layer</AccordionItemTrigger>
                <AccordionItemContent>

                <Flex gap='3' direction='row' wrap='wrap' justify='start' align='stretch'>
                
                    {
                        _.map(textData, (val) => (
                            <Box bgColor='white' key={val.id}  p='3' {...boxProp} onClick={() => spawnNodes(val)} >
                            <Flex direction='column' justify='end' alignItems='center' gap='4' >
                                {val.icon}
                                <Heading textAlign='center' size='sm' as='h4'>
                                {val.label}
                                </Heading>  
                            </Flex>
                            </Box>
                        ))
                    }
                        
                </Flex>

                </AccordionItemContent>
            </AccordionItem>

            <AccordionItem key="b" value="b" >
            <AccordionItemTrigger>Recurrent/Bidirectional</AccordionItemTrigger>
            <AccordionItemContent>
                <Flex gap='3' direction='row' wrap='wrap' justify='start' align='stretch'>
                
                {
                    _.map(numericData, (val) => (
                    <Box bgColor='white' key={val.id}  p='3' {...boxProp} onClick={() => spawnNodes(val)} >
                        <Flex direction='column' justify='end' alignItems='center' gap='4' >
                        {val.icon}
                        <Heading textAlign='center' size='sm' as='h4'>
                            {val.label}
                        </Heading>  
                        </Flex>
                    </Box>
                    ))
                }
                    
                </Flex>
            </AccordionItemContent>

            </AccordionItem>
            <AccordionItem key="c" value="c" >
            <AccordionItemTrigger>Convolution</AccordionItemTrigger>
            <AccordionItemContent>
                <Flex gap='3' direction='row' wrap='wrap' justify='start' align='stretch'>
                
                {
                    _.map(numericData, (val) => (
                    <Box bgColor='white' key={val.id}  p='3' {...boxProp} onClick={() => spawnNodes(val)} >
                        <Flex direction='column' justify='end' alignItems='center' gap='4' >
                        {val.icon}
                        <Heading textAlign='center' size='sm' as='h4'>
                            {val.label}
                        </Heading>  
                        </Flex>
                    </Box>
                    ))
                }
                    
                </Flex>
            </AccordionItemContent>

            </AccordionItem>
            </AccordionRoot>
                    
        </div>
    )
}

export default layer