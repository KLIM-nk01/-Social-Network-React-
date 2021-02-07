import React from "react";
import LogoStyle from "./Logo.module.scss";
import {NavLink} from "react-router-dom";

function Logo() {
    return (
        <div className={LogoStyle.logo}>
            <NavLink to="/Profile" href="#">
                <img src="https://img.icons8.com/flat_round/44/000000/filled-chat.png"/>

            </NavLink>
        </div>
    );
}

export default Logo;
