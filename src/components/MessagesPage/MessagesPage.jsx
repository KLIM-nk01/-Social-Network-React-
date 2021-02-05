import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import DialogsFooter from "./DialogsFooter/DialogsFooter";
import DialogsHeader from "./DialogsHeader/DialogsHeader";
import MessagesPageStyle from "./MessagesPage.module.scss";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatFooter from "./ChatFooter/ChatFooter";
import Chat from "./Chat/Chat";

function MessagesPage() {
    return (
        <>
            <div className={MessagesPageStyle.messagesPage}>
                <div className={MessagesPageStyle.column}>
                    <DialogsHeader/>
                    <Dialogs/>
                    <DialogsFooter/>
                </div>
                <div className={MessagesPageStyle.column}>
                    <ChatHeader/>
                    <Chat/>

                    <ChatFooter/>
                </div>
            </div>
        </>
    );
}

export default MessagesPage;
