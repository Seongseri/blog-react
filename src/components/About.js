import React from "react";
import "../css/about.css";

const About = ({ data }) => {
  return (
    <aside className="about">
      <h2>About Me</h2>
      <img src={data.profileImg} alt="프로필 사진" className="user-profile" />
      <p className="user-name">{data.name}</p>
      <p className="user-description">{data.userInfo}</p>
      <h3>Follow</h3>
      <ul className="sns">
        {data.sns &&
          Object.keys(data.sns)
            .map((item) => (
              <li key={Math.random() * 100}>
                <a href="https://github.com/Seongseri/blog-react.git">
                  <img src={`./assets/${item}.svg`} alt={item} />
                </a>
              </li>
            ))
            .reverse()}
      </ul>
    </aside>
  );
};

export default About;
