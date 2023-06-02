import React from 'react';
import logo from '../images/logo.png';

const Navigation = () => {
    return (
        <nav className='bg-[#232c3b] w-full flex items-center'>
            <img src={logo} alt='Drone' className='m-1 p-3 hover:scale-110 hover:shadow-lg' style={{ width: '6vw', height: 'auto' }}/>
            <div className='flex flex-grow justify-start'>
                <a href='#' className='text-white p-3 m-2 text-gray-400 font-medium hover:bg-[#1d2430] rounded-md'>Dashboard</a>
                <a href='#' className='text-white p-3 m-2 text-gray-400 font-medium hover:bg-[#1d2430] rounded-md'>Control</a>
                <a href='#' className='text-white p-3 m-2 text-gray-400 font-medium hover:bg-[#1d2430] rounded-md'>Live Feed</a>
                <a href='#' className='text-white p-3 m-2 text-gray-400 font-medium hover:bg-[#1d2430] rounded-md'>Settings</a>
            </div>
        </nav>
    )
}

export default Navigation