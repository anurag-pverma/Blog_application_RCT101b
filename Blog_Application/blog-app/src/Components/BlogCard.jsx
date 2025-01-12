import React from 'react'
import {Box,
     Center, 
     Text,
     useColorModeValue, 
     Image,
      Stack, 
      Heading, 
      Avatar} from '@chakra-ui/react'
import blogReducer from '../Redux/Blogs/reducer'

import {Link} from "react-router-dom"

function BlogCard({blog}) {
  return (
    <Center my= {6}>
        <Box maxW={'445px'} w='full' bg={useColorModeValue("white", 'grey.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        >
            <Box>
                <Image src= {`${blog.thumbnail_pic}`}/>
            </Box>
            {/* <Link to={`/articles/${blog.id}`}> */}
            <Link to={`/articles/${blog.id}`}>
            <Stack>

                <Text>Blog</Text>
                <Heading>{blog.title}</Heading>
                <Text>{blog.description}</Text>
            </Stack>
            <Stack>
                <Avatar src={`${blog.author.profile_pic}`} alt={`Author`}></Avatar>
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>

                    <Text color={"green.600"} fontWeight={600}>{blog.author.name}</Text>
                    <Text color={"red.600"}>{blog.author.publish_date}</Text>
                </Stack>
            </Stack>


            </Link>
        </Box>
    </Center>
  )
}

export default BlogCard