import React from "react";
import ProfilePhotoStyle from "./ProfilePhoto.module.scss";
import Photo from '../../../assets/Programmirer.jpg';
import { NavLink } from "react-router-dom";

function ProfilePhoto() {
  return (
    <>
      <div className={ProfilePhotoStyle.profilePhoto}>
          <NavLink to='/Profile'>
              <img src={'https://prikolist.club/wp-content/uploads/2019/08/kartinki_muzhskie_na_telefon_3_07073155.jpg'}/>
          </NavLink>
      </div>
    </>
  );
}

export default ProfilePhoto;
