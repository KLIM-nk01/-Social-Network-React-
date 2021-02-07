import React from "react";
import SocialButtonStyle from "./SocialButton.module.scss";

function SocialButton(props) {
  return (
    <>
      <div className={SocialButtonStyle.socialButton}>
       
            <button>
              <img src="https://img.icons8.com/ios/20/000000/comments.png" />
              <span>{props.countComments}</span>
            </button>
         
            <button>
              <img src="https://img.icons8.com/ios/23/000000/cloud-share-symbol.png" />
              <span>{props.countSharePost}</span>
            </button>
         
      </div>
    </>
  );
}

export default SocialButton;
