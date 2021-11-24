import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.scss'

export const ModelImg = ({photos}) => {


    return(
        <div className="imageContainer">
            <LazyLoadImage
            src={photos.src.original}
            alt={photos.photographer}
            effect="blur"
            height="10rem"
            />
          
            <div>
                <a target="_blank" href={photos.url}>PEXELS!</a>
            </div>
        </div>
    )
}