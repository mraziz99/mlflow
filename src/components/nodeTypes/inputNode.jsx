import React, {memo} from 'react'
import {Handle , Position } from '@xyflow/react'
import { Container,Flex,Heading,Text } from '@chakra-ui/react'




const inputNode = ({data, isConnect=false}) => {




  return (

    <>
    <Handle 
        type='target'
        position={Position.Left}
        isConnectable={true}

    />
    <Handle 
        type='source'
        position={Position.Right}
        isConnectable={true}

    />
    <Container
        bgColor='white'
        border='solid'
        borderWidth='1px'
        borderRadius='lg'
        p='3'
        width='20em'
        height='10em'
        display='flex'
        flexDirection='column'
        justify='center' 
        gap='5' 
        alignItems='center'
    >
            <Heading size={'md'} >
                Hidden Layer
            </Heading>
            
            <Text fontSize={'sm'} >
                {data.label}
            </Text>


    </Container>

    </>
  )
}

export default memo(inputNode)