import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleBlogPost } from "../Redux/Blogs/action";

const Article = () => {
  const {id}= useParams();
// we have make get request for id 
/// we want to get the current blog 
const dispatch = useDispatch();
const currentBlog = useSelector((store)=> store.blogReducer.currentBlog);
// incase of we don't have current blog we want to fetch 
useEffect(()=>{
  if(id&& Object.keys(currentBlog).length === 0){
    dispatch(fetchSingleBlogPost(Number(id)))
    
  }
},[currentBlog, dispatch, id])



  return (
    <Container maxW={"3xl"} pb={"4rem"}>
      <Box textAlign="center" py={{ base: 5, md: 10 }}>
        <Avatar
          name={currentBlog?.author?.name}
          size="lg"
          src={`${currentBlog?.author?.profile_pic}`}
        />
        <Text fontSize="lg">{currentBlog?.author?.name}</Text>
        <Text>{currentBlog?.author?.publish_date}</Text>
      </Box>
      <Center textAlign="center">
        <Stack>
          <Heading>{currentBlog.title}
            {/* Your most unhappy customers are your greatest source of learning */}
          </Heading>
          <Text fontSize="lg">{currentBlog.sub_title}
            {/* Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. */}
          </Text>
          <Box>
            <Image
              rounded={"lg"}
              src={
                `${currentBlog.thumbnail_pic}`
              }
              alt="Thumbnail Image"
            />
          </Box>
          <Box textAlign="left">
          `${currentBlog.description}`
            

            {/* Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
            <br />A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth.
            <br />
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar. */}
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default Article;
