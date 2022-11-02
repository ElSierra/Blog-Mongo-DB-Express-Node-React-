import React, { useEffect, useState } from "react";
import { Home } from "./components/Routes/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import BlogPost from "./components/Routes/BlogPost";
import Compose from "./components/Compose";
import Articles from "./Artcle";
import axios from "axios";
import { useCookies } from "react-cookie";
import { gapi } from "gapi-script";

function App() {
  const emptyData = {
    email: "",
    familyName: "",
    givenName: "",
    googleId: "",
    imageUrl: "",
    name: "",
  };
  const [cookies, setCookie] = useCookies(["user"]);
  const [profiles, setProfile] = useState(emptyData);
  const [blogPost, setblogPost] = useState([]);

  function loginwithgoogle(res: any) {
    setProfile({
      email: res.email,
      familyName: "",
      givenName: "",
      googleId: res.googleId,
      imageUrl: res.imageUrl,
      name: res.name,
    });
  }
  const navigate = useNavigate();
  //console.log(Articles);

  function changeNextPage(blogPost: any) {
    console.log("ChangeNext Called");

    navigate("/blogPost", {
      state: {
        id: blogPost.id || "",
        userName: profiles.name || "",
        imageUrl: profiles.imageUrl || "",
        googleId: profiles.googleId || "",
        title: blogPost.title || "",
        content: blogPost.content || "",
        date: blogPost.date || "",
        postImg: blogPost.postImg || "",
        authorName: blogPost.authorName || "",
        authorImage: blogPost.authorImg || "",
      },
    });
  }
  function onCompose() {
    navigate("/compose", {
      state: {
        name: profiles.name,
        imageUrl: profiles.imageUrl,
      },
    });
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            setPage={changeNextPage}
            isLoggedIn={loginwithgoogle}
            profile={profiles}
            onCompose={onCompose}
          />
        }
      />
      <Route path="/blogpost" element={<BlogPost />} />
      <Route
        path="/compose"
        element={profiles.name !== "" ? <Compose /> : <Home />}
      />
    </Routes>
  );
}

export default App;
