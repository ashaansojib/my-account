import React from 'react';
import GetRent from './GetRent';
import ProvideRent from './ProvideRent';

const Rent = () => {
    return (
        <div>
            <h2 className='text-2xl font-medium italic'>Renting Calculations</h2>
            <div className='grid grid-cols-2 justify-between gap-2'>
                <GetRent />
                <ProvideRent />
            </div>
        </div>
    );
};

export default Rent;