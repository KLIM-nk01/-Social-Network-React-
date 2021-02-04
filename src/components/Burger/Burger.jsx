import React from "react";
import  "./Burger.scss";

function Burger() {
  return (
    <>
      {/*  потом при нажатии добовлять класс is-active  для button */}
        <button class="hamburger hamburger--slider " type="button"> 
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      
    </>
  );
}

export default Burger;
