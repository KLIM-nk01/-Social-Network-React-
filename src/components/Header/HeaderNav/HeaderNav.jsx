import React from "react";
import HeaderNavStyle from "./HeaderNav.module.scss";

function HeaderNav() {
  return (
    <div className={HeaderNavStyle.header_nav}>
      <div>
        <a href="#">Home</a>
      </div>
      <div>
        <a href="#">Massage</a>
      </div>
      <div>
        <a href="#">Notification</a>
      </div>
    </div>
  );
}

export default HeaderNav;
