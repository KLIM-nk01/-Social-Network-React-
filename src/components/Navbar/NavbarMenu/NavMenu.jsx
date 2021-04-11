import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import ProfilePhoto from "../../Header/ProfilePhoto/ProfilePhoto";
import NavMenuStyle from "./NavMenu.module.scss";

function NavMenu() {
  return (
    <>
      <div className={NavMenuStyle.wrapper}>
        <div className={NavMenuStyle.navMenu_wrapper}>
          <ProfilePhoto />

          <div className={NavMenuStyle.navMenu}>
            <div>
              <NavLink to="/Profile" activeClassName={NavMenuStyle.active}>Profile</NavLink>
            </div>
            <div>
              <NavLink to="/MessagesPage" activeClassName={NavMenuStyle.active}>Messages</NavLink>
            </div>
            <div>
              <NavLink to="/PhotoPage" activeClassName={NavMenuStyle.active}>Photo</NavLink>
            </div>
            <div>
              <NavLink to="#">About</NavLink>
            </div>
            <div>
              <NavLink to="#">Settings</NavLink>
            </div>
          </div>

          <Button nameButton="Edit Profile" />
        </div>
      </div>
    </>
  );
}

export default NavMenu;
