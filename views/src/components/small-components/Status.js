import React from 'react';

const Status = ({ status }) => {
    let statusClassName = 'status px-4 h-auto w-auto text-center rounded-2xl inline-block font-medium'

    if (status === 'Flying') {
        statusClassName += ' bg-green-300 bg-opacity-50 text-green-600'
    } else if (status === "Landed") {
        statusClassName += ' bg-red-300 bg-opacity-50 text-red-600'
    }

    return (
        <div className={statusClassName}>
            {status}
        </div>
    )
}

export default Status
