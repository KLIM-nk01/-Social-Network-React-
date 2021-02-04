import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import MessagesPageStyle from "./MessagesPage.module.scss";

function MessagesPage() {
  return (
    <>
      <div className={MessagesPageStyle.messagesPage}>
        <div className={MessagesPageStyle.column}>
          <Dialogs/>
        </div>
        <div className={MessagesPageStyle.column}>sdfsdfsd</div>
      </div>
    </>
  );
}

export default MessagesPage;
