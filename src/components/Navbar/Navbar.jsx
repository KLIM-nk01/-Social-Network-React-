import React from "react";
import Button from "../Button/Button";
import NavbarStyle from './Navbar.module.scss';
import NavMenu from "./NavbarMenu/NavMenu";

function Navbar() {
  return (
    <>
      <div className={NavbarStyle.navbar_wrapper}>
        
        <NavMenu/>
       
      </div>
    </>
  );
}

export default Navbar;
