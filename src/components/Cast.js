import React from 'react';
const IMG_API = `https://image.tmdb.org/t/p/w1280`;


const Cast = (props) => {

    return (
        <div className="actor">
            <img className="actor-img" src={props.image ? IMG_API + props.image : 'https://pixy.org/src/139/1394670.png'} alt="" />
            <p className="actor-name">{props.name}</p>
            <p className="actor-char">{props.charName}</p>
        </div>
    )
};
export default Cast