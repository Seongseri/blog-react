import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "../src/css/global.css";
import "../src/css/main.css";

import fetchData from "./axios/fetchData";

import Home from "./pages/Home";
import PostView from "./pages/PostView";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Write from "./components/Write";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setBlogData(data.blog);
      setPostData(data.posts);
      setUserData(data.users[0]);
    };
    getData();
  }, []);

  return (
    <div className='App'>
        <Header isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}></Header>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                blogData={blogData}
                postData={postData}
                userData={userData}
              />
            }
          />
          <Route
            path='/:id'
            element={<PostView postData={postData} userData={userData} />}
          />
          <Route path="/write" element={<Write/>} />
        </Routes>
        <Footer></Footer>
      </div>      
  );
}

export default App;
