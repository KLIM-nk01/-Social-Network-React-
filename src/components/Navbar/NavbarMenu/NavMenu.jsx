import React from "react";
import Button from "../../Button/Button";
import ProfilePhoto from "../../Profile/ProfilePhoto/ProfilePhoto";
import NavMenuStyle from "./NavMenu.module.scss";

function NavMenu() {
  return (
    <>
      <div className={NavMenuStyle.wrapper}>
        <div className={NavMenuStyle.navMenu_wrapper}>
          <ProfilePhoto />

          <div className={NavMenuStyle.navMenu}>
            <div className={NavMenuStyle.active}>
              <a href="/Profile">Profile</a>
            </div>
            <div>
              <a href="/MessagesPage">Messages</a>
            </div>
            <div>
              <a href="#">Photo</a>
            </div>
            <div>
              <a href="#">About</a>
            </div>
            <div>
              <a href="#">Settings</a>
            </div>
          </div>

          <Button nameButton="Edit Profile" />
        </div>
      </div>
    </>
  );
}

export default NavMenu;
