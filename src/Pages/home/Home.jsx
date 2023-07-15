import React from 'react';
import MyCash from '../myCash/MyCash';
import Rent from '../rentCalculation/Rent';

const Home = () => {
    return (
        <>
        {/* my cash area */}
        <MyCash />
        <Rent />
        </>
    );
};

export default Home;