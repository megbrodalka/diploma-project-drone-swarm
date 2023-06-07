import React from 'react';

const Status = ({ status }) => {
    let statusClassName = 'status px-auto h-auto w-20 text-center rounded-2xl font-medium'

    if (status === 'Flying') {
        statusClassName += ' bg-green-300 bg-opacity-50 text-green-600' +
            ' dark:text-green-950 dark:bg-opacity-90'
    } else if (status === "Landed") {
        statusClassName += ' bg-red-300 bg-opacity-50 text-red-600 ' +
            'dark:bg-red-400 dark:text-red-950 '
    }

    return (
        <div className={statusClassName}>
            {status}
        </div>
    )
}

export default Status
