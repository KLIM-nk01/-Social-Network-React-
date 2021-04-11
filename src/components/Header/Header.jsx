import React from "react";

import HeaderStyle from "./Header.module.scss";
import HeaderNav from "./HeaderNav/HeaderNav";
import Logo from "./Logo/Logo";
import Search from "../Search/Search"

function Header() {
  return (
    <>
      <div className={HeaderStyle.header_wrapper}>
        <div className={HeaderStyle.header}>
          
          <HeaderNav />
          <Logo />
          <Search/>
          
        </div>
      </div>
    </>
  );
}

export default Header;
