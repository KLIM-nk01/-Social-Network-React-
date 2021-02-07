import React from 'react';
import  MessageSenStyle from './MessageSen.module.scss';
import Photo from "../../../../assets/Programmirer.jpg";

const MessageSen = (props) => {
    return (
        <div className={MessageSenStyle.MessageSen}>
            <span>{props.MessageSen}</span>
            <img src={Photo} alt={'ava'}/>
        </div>
    );
};

export default MessageSen;