import React from "react";
import Dialog from "./Dialog/Dialog";
import DialogsStyle from "./Dialogs.module.scss";

function Dialogs() {
    let dialogsData = [
        {idUrl: '1', nameSurname: 'Nikita Klimovich'},
        {idUrl: '2', nameSurname: 'Angela Znakovan'},
        {idUrl: '3', nameSurname: 'Mihail Zver'},
        {idUrl: '4', nameSurname: 'Nikita Klimovich'},
        {idUrl: '5', nameSurname: 'Nikita Klimovich'},
        {idUrl: '6', nameSurname: 'Nikita Klimovich'},
    ]
    return (
        <div className={DialogsStyle.dialogs}>
            <Dialog nameSurname={dialogsData[0].nameSurname} idUrl={dialogsData[0].idUrl}
                    srcPhoto="https://download-cs.net/steam/avatars/3412.jpg"/>
            <Dialog nameSurname={dialogsData[1].nameSurname} idUrl={dialogsData[1].idUrl}
                    srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg"/>
            <Dialog nameSurname={dialogsData[2].nameSurname} idUrl={dialogsData[2].idUrl}
                    srcPhoto="https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg"/>
            <Dialog nameSurname={dialogsData[3].nameSurname} idUrl={dialogsData[3].idUrl}
                    srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg"/>
            <Dialog nameSurname={dialogsData[4].nameSurname} idUrl={dialogsData[4].idUrl}
                    srcPhoto="https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg"/>
            <Dialog nameSurname={dialogsData[5].nameSurname} idUrl={dialogsData[5].idUrl}
                    srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg"/>


        </div>
    );
}

export default Dialogs;
