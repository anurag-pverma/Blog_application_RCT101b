import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


import { createBlogPost } from "../Redux/Blogs/action";

const CreateArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    sub_title: "",
    thumbnail_pic: "",
    description: "",
    author_name: "",
    author_profile_pic:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
  };

  const [formData, setFormData] = useReducer(
    (currData, newData) => ({ ...currData, ...newData }),
    initialValues
  );

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };
  // console.log(formData);*******************
  const createApplicationHandler = () => {
    // to get all the data
    const newData = {
      id: uuidv4(),
      title: formData.title,
      sub_title: formData.sub_title,
      thumbnail_pic: formData.thumbnail_pic,
      description: formData.description,
      author: {
        name: formData.author_name,
        profile_pic: formData.author_profile_pic,
        publish_date: new Date().toLocaleDateString(),
      },
    };
    dispatch(createBlogPost(newData));
    navigate("/articles")

  };

  return (
    <Container>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Create Article</Heading>
      </Box>
      <Box>
        <Stack spacing="24px">
          <FormControl isRequired>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              placeholder="Please enter blog title"
              name="title"
              onChange={handleFormDataChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="sub-title">Sub-Title</FormLabel>
            <Input
              id="sub-title"
              placeholder="Please enter blog sub-title"
              name="sub_title"
              onChange={handleFormDataChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="url">Thumbnail Pic URL</FormLabel>

            <Input
              type="url"
              id="url"
              name="thumbnail_pic"
              placeholder="Please enter thumbnail pic URL"
              onChange={handleFormDataChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="author">Select Author</FormLabel>
            <Select
              id="author"
              defaultValue={formData.author_name}
              name="author_name"
              onChange={handleFormDataChange}
              placeholder="Select Author"
            >
              <option value="Masai School">Masai School</option>
              <option value="Manish Kumar">Manish Kumar</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="desc">Description</FormLabel>
            <Textarea
              id="desc"
              name="description"
              onChange={handleFormDataChange}
            />
          </FormControl>
        </Stack>
        <Button onClick={createApplicationHandler}>Create Application</Button>
      </Box>
    </Container>
  );
};

export default CreateArticle;
