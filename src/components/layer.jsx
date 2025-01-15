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
            label : 'Dense',
            icon: ''
        },
        {
            id: '3b',
            label : 'Dropout',
            icon: ''
        },
        {
            id: '3c',
            label : 'Embedding',
            icon: ''
        },
        {
            id: '3d',
            label : 'Activation',
            icon: ''
        },
        {
            id: '3a',
            label : 'Flatten',
            icon: ''
        }

    ]


    const convol  = [
        {
            id: '4a',
            label: 'Conv1D',
            icon: ''
        },
        {
            id: '4b',
            label: 'Conv2D',
            icon: ''
        },
        {
            id: '4c',
            label: 'Upsampling2D',
            icon: ''
        },
        {
            id: '4d',
            label: 'MaxPooling2D',
            icon: ''
        },
        {
            id: '4e',
            label: 'MaxPooling1D',
            icon: ''
        },
        {
            id: '4f',
            label: 'AvgPooling1D',
            icon: ''
        },
        {
            id: '4g',
            label: 'AvgPooling2D',
            icon: ''
        },
        
    ]



    const recurrent = [
        {
            id: '5a',
            label: 'SimpleRNN',
            icon: ''
        },
        {
            id: '5a',
            label: 'LSTM',
            icon: ''
        },
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
                <AccordionItemTrigger>Basic Layer</AccordionItemTrigger>
                <AccordionItemContent>

                <Flex gap='3' direction='row' wrap='wrap' justify='start' align='stretch'>
                
                    {
                        _.map(ann, (val) => (
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
                    _.map(recurrent, (val) => (
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
                    _.map(convol, (val) => (
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