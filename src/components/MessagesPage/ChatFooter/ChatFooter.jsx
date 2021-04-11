import React from 'react';
import ChatFooterStyle from './ChatFooter.module.scss';
import Button from "../../Button/Button";

const ChatFooter = () => {
    let contentMessage = React.createRef();

    let sendMessage = () =>{
        let text = contentMessage.current.value;
        alert(text)
    }
    return (
        <div className={ChatFooterStyle.ChatFooter}>
            <textarea ref={contentMessage} placeholder={'Enter message'}></textarea>

            <Button onClick={sendMessage} nameButton={'Send'}/>

        </div>
    );
};

export default ChatFooter;