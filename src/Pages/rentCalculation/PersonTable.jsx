import React from 'react';

const PersonTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table text-white">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Azad</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Molin</td>
                        <td>1500</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PersonTable;