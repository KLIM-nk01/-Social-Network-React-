import React from "react";
import NotificationStyle from "./Notification.module.scss";


function Notification() {
  return (
    <>
      <div className={NotificationStyle.notification}>
      Recent Notifications
      </div>
    </>
  );
}

export default Notification;
