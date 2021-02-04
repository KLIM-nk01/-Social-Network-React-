import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import DialogsFooter from "./DialogsFooter/DialogsFooter";
import DialogsHeader from "./DialogsHeader/DialogsHeader";
import MessagesPageStyle from "./MessagesPage.module.scss";

function MessagesPage() {
  return (
    <>
      <div className={MessagesPageStyle.messagesPage}>
        <div className={MessagesPageStyle.column}>
          <DialogsHeader/>
          <Dialogs/>
          <DialogsFooter/>
        </div>
        <div className={MessagesPageStyle.column}>sdfsdfsd</div>
      </div>
    </>
  );
}

export default MessagesPage;
