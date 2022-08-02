import React from "react";
import ImageMain from "./img/img_main.jpg";
import "../styles.css";
import { Link } from "react-router-dom";
import PostPage from '../PostPage';

const Header = () => {
  return (
    <>
      <nav class="link">
        <ul>
          <Link to="/">TOP</Link>&nbsp;&nbsp;
          <Link to="UploadPage">UPLOAD</Link>&nbsp;&nbsp;
          <Link to="DeletePage">DELETE</Link>
        </ul>
      </nav>
      <header class="header">
        <br />
        <h1 class="logo">Photo Gallery</h1>
        <div class="header__bg">
          <img src={ImageMain} alt="蔵王山の火口"></img>
        </div>
        <br />
      </header>
    </>
  );
};

export default Header;