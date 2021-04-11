import React from 'react';
import PhotoCardStyle from './PhotoCard.module.scss'

const PhotoCard = (props) => {
    return (
        <div className={PhotoCardStyle.PhotoCard}>
            <div className={PhotoCardStyle.photo_overlay}>
                <img src={props.imgAddress} alt={'photo'}/>
            </div>
            <div className={PhotoCardStyle.photo_gallery_caption}>
                <span>{props.photoCaption}</span>
            </div>
        </div>
    );
};

export default PhotoCard;
