import React from 'react';
import PhotoPageStyle from './Photopage.module.scss';
import PhotoPageHeader from "./PhotoPageHeader/PhotoPageHeader";
import PhotoWrapper from "./PhotoWrapper/PhotoWrapper";

const PhotoPage = () => {
    return (
        <div className={PhotoPageStyle.PhotoPage}>
            <PhotoPageHeader/>
            <PhotoWrapper/>
        </div>
    );
};

export default PhotoPage;