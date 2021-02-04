import React from "react";
import NavbarStyle from './Navbar.module.scss';
import NavMenu from "./NavbarMenu/NavMenu";

function Navbar() {
  return (
    <>
      <nav className={NavbarStyle.navbar_wrapper}>
        
        <NavMenu/>
      </nav>
    </>
  );
}

export default Navbar;
