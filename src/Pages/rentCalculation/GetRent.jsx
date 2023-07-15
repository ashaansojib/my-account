import React from 'react';
import { FaSimCard } from 'react-icons/fa';

const GetRent = () => {
    return (
        <div>
            <p>Get Rents</p>
            <div className='p-4 bg-[#4C7CC6] rounded-md'>
                <div className='flex justify-between text-white mb-2'>
                    <span className='text-3xl'><FaSimCard /></span>
                    <p className='text-2xl font-semibold'>BDT : 8000</p>
                </div>
                <small>Card Number</small>
                <p>880 189 932 859</p>
                <div className='flex justify-between text-gray-300 mt-2'>
                    <p>Ashaduzzaman Sojib</p>
                    <p>Update : 15/07/23</p>
                </div>
            </div>
        </div>
    );
};

export default GetRent;