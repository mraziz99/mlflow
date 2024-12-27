import React from 'react'

import {  Button } from '@/components/ui/button'
import { Flex,Box } from '@chakra-ui/react'
import { LuCopyPlus } from 'react-icons'
import { MdBorderColor } from 'react-icons/md'




const Input = () => {
  
  // const variab = {border:'solid 2px', borderColor:'green.300'} // klo mau custom border

  const boxProp = {
    borderRadius:'lg' ,_hover:{ scale: '1.1',cursor: 'pointer',shadow: 'lg' }, shadow:'sm', border:'solid 1px', borderColor:'teal.100' ,borderRadius:'md'  ,height:'24' ,width:'45%',transition: 'scale 0.1s ease-in'
  }
  


  return (
    <div className='w-full'>
      <Flex gap='3' direction='row' wrap='wrap' justify='space-evenly' align='stretch'>
        <Box {...boxProp} >

        </Box>
        <Box {...boxProp}>

        </Box>
      </Flex>
        
    </div>
  )
}




export default Input