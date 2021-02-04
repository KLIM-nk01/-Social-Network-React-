import React from "react";
import ProfilePhotoStyle from "./ProfilePhoto.module.scss";
import Photo from '../../../assets/Programmirer.jpg';

function ProfilePhoto() {
  return (
    <>
      <div className={ProfilePhotoStyle.profilePhoto}>
          <a href=''>
              <img src={Photo} alt="Profile Photo"/>
          </a>
      </div>
    </>
  );
}

export default ProfilePhoto;
