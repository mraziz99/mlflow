import React from 'react'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,

} from "@/components/ui/accordion"
import { Flex,Box,Heading } from '@chakra-ui/react';
import { PiColumnsPlusRightLight } from "react-icons/pi";
import { GrDocumentTxt } from "react-icons/gr";




const Preprocess = () => {



  const textData = [

    {
      id: '2a',
      title: 'One-Hot',
      icon: <PiColumnsPlusRightLight size='2em' />
    },
    {
      id: '2b',
      title: 'Tf-Idf',
      icon: <GrDocumentTxt size='2em' />
    },

  ]


  const numericData = [
    {
      id: '2c',
      title: 'Feature Scaling',
      icon: <GrDocumentTxt size='2em' />
    },
    {
      id: '2d',
      title: 'Missing Values',
      icon: <GrDocumentTxt size='2em' />
    },
    {
      id: '2e',
      title: 'Discretization',
      icon: <GrDocumentTxt size='2em' />
    },
    {
      id: '2f',
      title: 'Missing Values',
      icon: <GrDocumentTxt size='2em' />
    }
  ]

  const boxProp = {
    borderRadius:'lg' ,_hover:{ scale: '1.1',cursor: 'pointer',shadow: 'lg' }, shadow:'sm', border:'solid 1px', borderColor:'teal.200' ,borderRadius:'md'  ,height:'24' ,width:'45%',transition: 'scale 0.1s ease-in'
  }
    
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
            <AccordionItemTrigger>Text Data</AccordionItemTrigger>
            <AccordionItemContent>

              <Flex gap='3' direction='row' wrap='wrap' justify='start' align='stretch'>
              
                {
                  _.map(textData, (val) => (
                    <Box bgColor='white' key={val.id}  p='3' {...boxProp}>
                      <Flex direction='column' justify='end' alignItems='center' gap='4' >
                        {val.icon}
                        <Heading textAlign='center' size='sm' as='h4'>
                          {val.title}
                        </Heading>  
                      </Flex>
                    </Box>
                  ))
                }
                     
              </Flex>

            </AccordionItemContent>
          </AccordionItem>

          <AccordionItem key="b" value="b" >
          <AccordionItemTrigger>Numeric Data</AccordionItemTrigger>
          <AccordionItemContent>
            <Flex gap='3' direction='row' wrap='wrap' justify='start' align='stretch'>
              
              {
                _.map(numericData, (val) => (
                  <Box bgColor='white' key={val.id}  p='3' {...boxProp}>
                    <Flex direction='column' justify='end' alignItems='center' gap='4' >
                      {val.icon}
                      <Heading textAlign='center' size='sm' as='h4'>
                        {val.title}
                      </Heading>  
                    </Flex>
                  </Box>
                ))
              }
                   
            </Flex>
          </AccordionItemContent>

          </AccordionItem>
          <AccordionItem key="c" value="c" >


          </AccordionItem>
        </AccordionRoot>
        

    </div>
  )
}

export default Preprocess