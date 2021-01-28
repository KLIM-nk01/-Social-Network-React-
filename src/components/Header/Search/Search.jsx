import React from "react";
import Search from "./Search.module.scss";

function Search() {
  return (
    <div className={Search.logo}>
      <a href="#">
        <img src="https://img.icons8.com/doodle/48/000000/chat.png" />
        <span>vchate</span>
      </a>
    </div>
  );
}

export default Search;