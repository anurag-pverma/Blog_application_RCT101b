import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Articles from "./Pages/Articles";
import CreateArticle from "./Pages/CreateArticle";
import Article from "./Pages/Article";

function App() {
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("white", "blackAlpha.300")}
      color={useColorModeValue("black", "gray.200")}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />

        <Route path="/articles/:id/update" element={<UpdateArticle />} />

        <Route path="/create" element={<CreateArticle />} />
      </Routes>
    </Box>
  );
}

export default App;



// Lecture link=> https://course.masaischool.com/lectures/29209
// watch time: => till 1 hour:10 min. && 35 minute left