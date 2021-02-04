import React from "react";
import Dialog from "./Dialog/Dialog";
import DialogsStyle from "./Dialogs.module.scss";

function Dialogs() {
  return (
    <div className={DialogsStyle.dialogs}>
      {/* <DialodsHeader/> */}

      <Dialog srcPhoto="https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg" />
      <Dialog srcPhoto="https://download-cs.net/steam/avatars/3412.jpg" />
      <Dialog srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
      <Dialog srcPhoto="https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg" />
      <Dialog srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
      <Dialog srcPhoto="https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg" />
      <Dialog srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
      <Dialog srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
      <Dialog srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
      <Dialog srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
      <Dialog srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
      <Dialog srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
      <Dialog srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
      <Dialog srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
      <Dialog srcPhoto="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
 

      {/* <DialogsFooter/> */}
    </div>
  );
}

export default Dialogs;
