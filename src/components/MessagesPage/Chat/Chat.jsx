import React from 'react';
import ChatStyle from './Chat.module.scss';
import MessageRecipient from "./MessageRecipient/MessageRecipient";
import MessageSen from "./MessageSender/MessageSen";

const Chat = () => {
    return (
        <div className={ChatStyle.Chat}>
            <MessageRecipient MessageRecipient="Hi!"/>
            <MessageSen MessageSen='sdfsdfsdfsdf'/>
        </div>
    );
};

export default Chat;
