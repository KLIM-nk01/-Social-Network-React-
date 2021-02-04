import React from "react";
import ProfilePhotoStyle from "./ProfilePhoto.module.scss";
import Photo from '../../../assets/Programmirer.jpg';
import { NavLink } from "react-router-dom";

function ProfilePhoto() {
  return (
    <>
      <div className={ProfilePhotoStyle.profilePhoto}>
          <NavLink to='/Profile'>
              <img src={Photo} alt="Profile Photo"/>
          </NavLink>
      </div>
    </>
  );
}

export default ProfilePhoto;
