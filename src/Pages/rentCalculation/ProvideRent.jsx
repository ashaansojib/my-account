import React from 'react';
import PersonTable from './PersonTable';

const ProvideRent = () => {
    return (
        <div>
            <p className='text-right'>Provided Money</p>
            <div className='p-4 bg-[#abc0df] rounded-md'>
                <PersonTable />
            </div>
        </div>
    );
};

export default ProvideRent;