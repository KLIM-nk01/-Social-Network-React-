import React from 'react';
import PhotoPageStyle from './Photopage.module.scss';
import PhotoPageHeader from "./PhotoPageHeader/PhotoPageHeader";
import PhotoWrapper from "./PhotoWrapper/PhotoWrapper";

const PhotoPage = (props) => {
    return (
        <div className={PhotoPageStyle.PhotoPage}>
            <PhotoPageHeader/>
            <PhotoWrapper imgData={props.imgData}/>
        </div>
    );
};

export default PhotoPage;