import React from 'react';
import PhotoWrapperStyle from './PhotoWrapper.module.scss';
import PhotoCard from "./PhotoCard/PhotoCard";

const PhotoWrapper = () => {
    return (
        <div className={PhotoWrapperStyle.PhotoWrapper}>

            <PhotoCard photoCaption={'Create Folder'} />
            <PhotoCard  imgAddress={'https://demo.hasthemes.com/adda-preview/adda/assets/images/photos/photo-7.jpg'}/>
            <PhotoCard imgAddress={'https://demo.hasthemes.com/adda-preview/adda/assets/images/photos/photo-8.jpg'}/>
            <PhotoCard imgAddress={'https://demo.hasthemes.com/adda-preview/adda/assets/images/photos/photo-9.jpg'}/>
            <PhotoCard imgAddress={'https://demo.hasthemes.com/adda-preview/adda/assets/images/photos/photo-8.jpg'}/>
            <PhotoCard imgAddress={'https://demo.hasthemes.com/adda-preview/adda/assets/images/photos/photo-6.jpg'}/>
            <PhotoCard imgAddress={'https://demo.hasthemes.com/adda-preview/adda/assets/images/photos/photo-2.jpg'}/>
            <PhotoCard imgAddress={'https://demo.hasthemes.com/adda-preview/adda/assets/images/photos/photo-1.jpg'}/>
        </div>
    );
};

export default PhotoWrapper;