import React from "react";
import HeaderStyle from "./Header.module.scss";
import HeaderNav from "./HeaderNav/HeaderNav";
import Logo from "./Logo/Logo";

function Header() {
  return (
    <>
      <div className={HeaderStyle.header_wrapper}>
        <div className={HeaderStyle.header}>
          <HeaderNav />
          <Logo />

          <form className={HeaderStyle.search}>
            <p>
              <input type="search" name="" placeholder="Search" />
              <input type="submit" value="search" />
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;
