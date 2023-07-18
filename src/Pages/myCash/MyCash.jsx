import React from 'react';
import { FaSimCard } from 'react-icons/fa';
import CashHistory from './CashHistory';

const MyCash = () => {

    return (
        <div className='p-4 bg-slate-200 '>
            <h2 className='text-2xl font-medium italic text-center mb-2'>My Total Cash</h2>
            <div className='grid grid-cols-3 gap-2 items-start justify-between'>
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
                {/* add money form */}
                <form className='grid grid-cols-1 items-center justify-center gap-2'>
                    <input className='input input-bordered w-full max-w-xs' type="text" placeholder='Amount' />
                    <textarea className="textarea textarea-bordered" placeholder='Type Message'></textarea>
                    <button className='btn btn-outline'>Add TK</button>
                </form>
                <div>
                    <CashHistory />
                    <CashHistory />
                </div>
            </div>
        </div>
    );
};

export default MyCash;