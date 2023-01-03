import React from "react";
import Posts from "../components/Posts";
import About from "../components/About";

const Home = ({ blogData, postData, userData }) => {
  return (
    <>
      <main>
        <div className='max-width'>
          <Posts data={postData}></Posts>
          <About data={userData}></About>
        </div>
      </main>
    </>
  );
};

export default React.memo(Home);
