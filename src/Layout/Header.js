import React from "react";

import "../css/global.css";
import "../css/header.css";

import Button from "./../components/Button";
import Write from "../components/Write";
import { Link } from "react-router-dom";

function Header({ isLoggedin, setIsLoggedIn }) {
  return (
    <header className="nav">
      <div className="max-width">
        <h1 className="header-h1">
          <a className="header-h1-a" href="./">
            My Blog
          </a>
        </h1>
        <ul className="header-btn">
          {isLoggedin ? (
            <li>
              <Link to="/write">
                <button className="button" onClick={Write}>
                  <span>글쓰기</span>
                </button>
              </Link>
            </li>
          ) : (
            <li
              onClick={() => {
                setIsLoggedIn(!isLoggedin);
              }}
            >
              <a href="#" className="button gray">
                <span>로그인</span>
              </a>
            </li>
          )}
          <li
            onClick={() => {
              setIsLoggedIn(!isLoggedin);
            }}
          >
            {isLoggedin ? (
              <Button classes={"button gray"} buttonTxt={"로그아웃"}></Button>
            ) : (
              <Button classes={"button gray"} buttonTxt={"회원가입"}></Button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
