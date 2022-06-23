import React from 'react';
import './Banner2.css'
import banner2 from '../../../Assets/Banner/banner2.jpg'
const Banner2 = () => {
    return (
        <div className='Banner2'>
            <img src={banner2} alt="" />
            <div className="banner-details">
                <h1>BECOME </h1>
                <h1>YOUR</h1>
                <h1> STRONGEST </h1>
                <h1>SELF</h1>
                <h4>exercise smarter. feel better . live longer.</h4>
                <p>I'm a forty-something fitness professional, specializing in health and wellness optimization through a vehicle of cardiovascular, flexibility and resistance training sometimes presented through circuit training. You will be completely revitalized by my program!</p>
               <div className='button'> <button>let's train now</button></div>
            </div>
        </div>
    );
};

export default Banner2;