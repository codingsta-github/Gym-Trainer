import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
// import Features from '../Features/Features';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Banner2></Banner2>
            <Services></Services>
            {/* <Features></Features> */}
        </div>
    );
};

export default Home;