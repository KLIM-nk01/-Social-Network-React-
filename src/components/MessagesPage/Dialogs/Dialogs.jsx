import React from "react";
import Dialog from "./Dialog/Dialog";
import DialogsStyle from "./Dialogs.module.scss";

function Dialogs(props) {
    let dialogElement = props.dialogsData.map((el) =>
        <Dialog idUrl={el.idUrl}
                nameSurname={el.nameSurname}
                srcPhoto={el.srcPhoto}
        />
    );
    return (
        <div className={DialogsStyle.dialogs}>
            {
                dialogElement
            }
        </div>
    );
}

export default Dialogs;
