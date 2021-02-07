import React from 'react';
import MessageRecipientStyle from "./MessageRecipient.module.scss";
import Photo from '../../../../assets/Programmirer.jpg';

const MessageRecipient = (props) => {
    return (
        <div className={MessageRecipientStyle.MessageRecipient}>
            <img src={Photo} alt={'ava'}/>
            <span>{props.MessageRecipient}</span>
        </div>
    );
};

export default MessageRecipient;