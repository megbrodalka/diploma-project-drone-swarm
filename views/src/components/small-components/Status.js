import React from 'react';

const Status = ({ status }) => {
    let statusClassName = 'status px-auto h-auto w-20 text-center rounded-lg'

    if (status === 'Flying') {
        statusClassName += ' text-white bg-blue-700 hover:bg-blue-800';
    } else if (status === "Landed") {
        statusClassName += ' border border-gray-200 hover:bg-gray-100 hover:text-blue-700';
    }

    return (
        <div className={statusClassName}>
            {status}
        </div>
    )
}

export default Status
