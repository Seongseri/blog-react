import React, { useState, useEffect } from "react";

import "../css/main.css";
import "../css/view.css";

import Wrapbox from "./Wrapbox";
import Author from "./Author";

const View = ({ userData, post }) => {
  const [postContent, setPostContent] = useState([]);
  useEffect(() => {
    if (post) {
      setPostContent(post.contents);
    }
  }, [post]);

  let [like, setLike] = useState([0,0,0]);
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
  };

  return (
    <div className='view'>
      <div className='max-width'>
        <Wrapbox>
          <Author
            name={userData.name}
            created={post && post.created}
          />
          <div className='title-wrap'>
            <h2>{post && post.title}</h2>
            <button className='btn-like' onClick={(e)=>{
                  e.stopPropagation(); 
                  let copy = [...like]; 
                  copy[0] += 1; 
                  setLike(copy);}}>❤ {like[0]}</button>
          </div>
          <hr />
          <div className='view-contents'>
            {postContent.map((item, i) => {
              if (item.type === "p") {
                return <p key={i}>{item.text}</p>;
              }
              if (item.type === "img") {
                return <img src={item.src}></img>;
              }
            })}
          </div>
          <div className='btn-group'>
            <a href='#' className='btn-modify'>
              <span className='a11y-hidden'>modify</span>
            </a>
            <button type='button' className='btn-delete'>
              <span className='a11y-hidden'>delete</span>
            </button>
          </div>
          <a href='./' className='btn-back'>
            <span className='a11y-hidden'>Back</span>
          </a>
        </Wrapbox>
      </div>
    </div>
  );
};

export default React.memo(View);
