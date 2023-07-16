import React from 'react';
import PersonTable from './PersonTable';

const GetRent = () => {
    return (
        <div>
            <p>Get Rents</p>
            <div className='p-4 bg-[#abc0df] rounded-md'>
                <PersonTable />
            </div>
        </div>
    );
};

export default GetRent;