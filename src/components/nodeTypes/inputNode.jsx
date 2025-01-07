import React, {memo} from 'react'
import {Handle , Position } from '@xyflow/react'
import { Box, Container,Flex,Heading,Text } from '@chakra-ui/react'




export const inputNode = ({data, isConnect=false}) => {


  return (

    <Container
        p='0'
        width='10em'
        height='auto'
    >
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
    <Box
        bgColor='gray.400'
        border='solid 1px'
        p='2'
        borderRadius='8px 8px 0 0'
    >
        <Text>
            Input Nodes
        </Text>
    </Box>

    <Box
        bgColor='white'
        border='solid'
        borderWidth='1px'
        borderRadius='0 0 8px 8px'
        p='3'
        width='full'
        height='6em'
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


    </Box>

    </Container>
  )
}


export const preNode = ({data}) => {

    return (

        <Container
            p='0'
            width='6em'
            height='6em'
        >
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
        <Box
            bgColor='green.400'
            border='solid 1px'
            p='2'
            borderRadius='8px 8px 0 0'
        >
            <Text>
                PreProcess Nodes
            </Text>
        </Box>
    
        <Box
            bgColor='white'
            border='solid'
            borderWidth='1px'
            borderRadius='0 0 8px 8px'
            p='3'
            width='full'
            height='full'
            display='flex'
            flexDirection='column'
            justify='center' 
            gap='5' 
            alignItems='center'
        >
                {data.icon}
                
                <Text fontSize={'sm'} >
                    {data.label}
                </Text>
    
    
        </Box>
    
        </Container>
      )

}


export const activation = () => {

}


export const layer = () => {

}