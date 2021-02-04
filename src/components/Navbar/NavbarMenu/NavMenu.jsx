import React from "react";
import ProfilePhoto from "../../Profile/ProfilePhoto/ProfilePhoto";
import NavMenuStyle from "./NavMenu.module.scss";

function NavMenu() {
  return (
    <>
      <div className={NavMenuStyle.navMenu_wrapper}>
        <ProfilePhoto />
        <div className={NavMenuStyle.navMenu}>
          <div>
            <a href="#">Profile</a>
          </div>
          <div>
            <a href="#">Massages</a>
          </div>
          <div>
            <a href="#">Music</a>
          </div>
          <div>
            <a href="#">News</a>
          </div>

          <div>
            <a href="#">Settings</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavMenu;
