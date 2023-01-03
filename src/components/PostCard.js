import React from "react";
import "../css/post.css";
import Author from "./Author";

const PostCard = ({
  id, title, description,
  thumbnail, authorName, created,
}) => {
  return (
    <li>
      <a className='post' href={`./${id}`}>
        <article>
          <img src={thumbnail} alt='' />
          <div className='contents-wrap'>
            <h3>{title}</h3>
            <Author name={authorName} created={created} />
            <p className='post-description'>{description}</p>
          </div>
        </article>
      </a>
    </li>
  );
};

export default PostCard;
