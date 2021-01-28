import React from "react";
import LogoStyle from "./Logo.module.scss";

function Logo() {
  return (
    <div className={LogoStyle.logo}>
      <a href="#">
        <img src="https://img.icons8.com/doodle/48/000000/chat.png" />
        <span>vchate</span>
      </a>
    </div>
  );
}

export default Logo;
