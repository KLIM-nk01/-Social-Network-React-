import React from "react";
import DialogStyle from "./Dialog.module.scss";
import {NavLink} from "react-router-dom";


function Dialog(props) {
    let path = '/MessagesPage/' + props.idUrl;

    return (
        <div>
            <NavLink className={DialogStyle.dialog} to={path}>
                <img
                    src={props.srcPhoto}
                    alt=""
                />
                <div className={DialogStyle.wrapper}>
                    <div className={DialogStyle.name_message}>
                        <span>{props.nameSurname}</span>
                        <span>Last message</span>
                    </div>

                    <div className={DialogStyle.close}>

                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Dialog;
