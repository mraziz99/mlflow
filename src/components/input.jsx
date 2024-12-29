'use client'

import React from 'react'

import {  Button } from '@/components/ui/button'
import { Flex,Box,Heading } from '@chakra-ui/react'
import { LuCopyPlus,LuFilePenLine  } from 'react-icons/lu'
import { MdBorderColor } from 'react-icons/md'
import { FaFileCsv,FaDatabase  } from "react-icons/fa";
import _ from 'lodash'




const Input = () => {

  const carddetails = [
    {
      title: 'CSV File',
      icon: <FaFileCsv size='2em' />
    },
    {
      title: 'Database',
      icon : <FaDatabase size='2em' />
    },
    {
      title: 'Manual Input',
      icon: <LuFilePenLine size='2em' />
    }
  ]
  
  // const variab = {border:'solid 2px', borderColor:'green.300'} // klo mau custom border

  const boxProp = {
    borderRadius:'lg' ,_hover:{ scale: '1.1',cursor: 'pointer',shadow: 'lg' }, shadow:'sm', border:'solid 1px', borderColor:'teal.200' ,borderRadius:'md'  ,height:'24' ,width:'45%',transition: 'scale 0.1s ease-in'
  }
  


  return (
    <div className='w-full'>
      <Flex gap='3' direction='row' wrap='wrap' justify='start' align='stretch'>

        {
          _.map(carddetails, (val) => (
            <Box key={val.title}  p='3' {...boxProp}>
              <Flex direction='column' justify='end' alignItems='center' gap='4' >
                {val.icon}
                <Heading size='sm' as='h4'>
                  {val.title}
                </Heading>  
              </Flex>
            </Box>
          ))
        }
       
      </Flex>
        
    </div>
  )
}




export default Input