import React, { useState } from "react";
import { Home } from "./components/Routes/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import BlogPost from "./components/Routes/BlogPost";
import Compose from "./components/Compose";
import Articles from "./Artcle";


function App() {
 
  const navigate = useNavigate();
  console.log(Articles);

  function changeNextPage(blogPost: any) {
    console.log("ChangeNext Called");

    navigate("/blogPost", {
      state: {
        title: blogPost.title,
        content: blogPost.content,
        date: blogPost.date,
        postImg: blogPost.postImg,
        link: blogPost.link,
      },
    });
  }

  return (
    <Routes>
      <Route path="/" element={<Home setPage={changeNextPage} />} />
      <Route path="/blogpost" element={<BlogPost />} />
      <Route path="/compose" element={<Compose />} />
    </Routes>
  );
}

export default App;
