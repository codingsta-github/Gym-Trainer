import React from 'react';
import './ShowCase.css'
const ShowCase = ({data}) => {
    return (
        <div className='ShowCase'>
            <div className="showcase-img">
                <img src={data.image} alt="" />
            </div>
            <div className={"ShowCase-details"}>
                <h2>{data.name}</h2>
                <h1>${data.price}.00</h1>
            </div>
        </div>
    );
};

export default ShowCase;