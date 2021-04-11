import React from "react";
import BurgerStyle from  "./Burger.module.scss";

function Burger(props) {

  return (

    <>
      {/*  потом при нажатии добовлять класс is-active  для button */}
        <button onClick={props.onClick} className={BurgerStyle.burger} type="button">
          <span className={BurgerStyle.burger_items}></span>
        </button>
      
    </>
  );
}

export default Burger;
