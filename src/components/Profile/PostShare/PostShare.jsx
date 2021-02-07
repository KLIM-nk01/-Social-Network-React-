import React from "react";
import PostShareStyle from "./PostShare.module.scss";
import Button from "../../Button/Button";


function PostShare() {
  return (
    <>
      <div className={PostShareStyle.Post_Share}>
          <img src={'https://prikolist.club/wp-content/uploads/2019/08/kartinki_muzhskie_na_telefon_3_07073155.jpg'} alt={'fdf'}/>
          <div className={PostShareStyle.Share}>
                <textarea placeholder={'Say Something'} className={PostShareStyle.Share_wrapper}></textarea>
                <Button nameButton={'Share'}/>
          </div>
      </div>
    </>
  );
}

export default PostShare;
