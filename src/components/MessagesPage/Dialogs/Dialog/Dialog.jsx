import React from "react";
import DialogStyle from "./Dialog.module.scss";

function Dialog(props) {
  return (
    <div className={DialogStyle.dialog}>
      <img
        src={props.srcPhoto}
        alt=""
      />
      <div className={DialogStyle.wrapper}>
        <div className={DialogStyle.name_message}>
          <span>Name Surname</span>
          <span>Last message</span>
        </div>

        <div className={DialogStyle.time}>
          <span>19.58</span>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
