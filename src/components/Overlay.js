import React from 'react';
import gradient from '../img/gradient.svg';

const Overlay = () => {
return(
    <>
        <div className="overlay"></div>
        <img className="gradient" src={gradient}></img>
        <div className="hue-rotate"></div>
    </>
)
}

export default Overlay;