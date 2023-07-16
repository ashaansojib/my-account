import React from 'react';
import GetRent from './GetRent';
import ProvideRent from './ProvideRent';

const Rent = () => {
    return (
        <div className='p-4 bg-slate-100'>
            <h2 className='text-2xl font-medium italic text-center'>Renting Calculations</h2>
            <div className='grid grid-cols-2 justify-between gap-2'>
                <GetRent />
                <ProvideRent />
            </div>
            <div className='grid grid-cols-3 py-2 gap-2'>
                <div>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Rent Type</option>
                        <option>Get Rent</option>
                        <option>Provide Rent</option>
                    </select>
                </div>
                <input className='input input-bordered w-full max-w-xs' type="text" placeholder='Amount' />
                <button className='btn btn-outline'>Add Rent</button>
            </div>
        </div>
    );
};

export default Rent;