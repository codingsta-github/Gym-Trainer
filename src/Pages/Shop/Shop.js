import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import SharedBanner from '../Shared/DetailsContainer/SharedBanner/SharedBanner';
import './Shop.css'
const Shop = () => {
    const location=useLocation()
    return (
        <div className='Shop'>
            <SharedBanner>{location.pathname}</SharedBanner>
            <Outlet></Outlet>
        </div>
    );
};

export default Shop;