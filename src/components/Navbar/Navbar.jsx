import React from "react";
import NavbarStyle from './Navbar.module.scss';

function Navbar() {
  return (
    <>
      <nav className={NavbarStyle.navbar_wrapper}>
        <div><a href='#'>Profile</a></div>
        <div><a href='#'>Massages</a></div>
        <div><a href='#'>Music</a></div>
        <div><a href='#'>News</a></div>

        <div><a href='#'>Settings</a></div>
      </nav>
    </>
  );
}

export default Navbar;
