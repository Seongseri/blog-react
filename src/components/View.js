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

  let [like, setLike] = useState([0, 0, 0]);

  return (
    <div className="view">
      <div className="max-width">
        <Wrapbox>
          <Author name={userData.name} created={post && post.created} />
          <div className="title-wrap">
            <h2>{post && post.title}</h2>
            <button
              className="btn-like"
              onClick={(e) => {
                e.stopPropagation();
                let copy = [...like];
                copy[0] += 1;
                setLike(copy);
              }}
            >
              ❤ {like[0]}
            </button>
          </div>
          <hr />
          <div className="view-contents">
            {postContent.map((item) => {
              if (item.type === "p" || item.type === "img") {
                return (
                  <div key={Math.random() * 100}>
                    <p>{item.text}</p>
                    <img src={item.src} />
                  </div>
                );
              }
            })}
          </div>
          <div className="btn-group">
            <a href="#" className="btn-modify">
              <span className="a11y-hidden">modify</span>
            </a>
            <button type="button" className="btn-delete">
              <span className="a11y-hidden">delete</span>
            </button>
          </div>
          <a href="./" className="btn-back">
            <span className="a11y-hidden">Back</span>
          </a>
        </Wrapbox>
      </div>
    </div>
  );
};

export default React.memo(View);
