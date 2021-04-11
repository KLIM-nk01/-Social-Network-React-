import React from 'react';
import PhotoWrapperStyle from './PhotoWrapper.module.scss';
import PhotoCard from "./PhotoCard/PhotoCard";

const PhotoWrapper = (props) => {
    let photoElement = props.imgData.map(el => <PhotoCard  imgAddress={el.imgSrc}/>)
    return (
        <div className={PhotoWrapperStyle.PhotoWrapper}>
            {
                photoElement
            }
        </div>
    );
};

export default PhotoWrapper;