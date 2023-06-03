import React from 'react';
import logo from '../images/drone-logo.png';
import bell from '../images/bell.svg';

const Navigation = () => {
    return (
        <nav className='bg-[#232c3b] w-full flex items-center'>
            <img src={logo} alt='Drone' className='mx-5 p-3 hover:scale-110 h-auto w-16'/>
            <div className='flex flex-grow justify-start'>
                <a href='#' className='text-white p-2 m-2 text-gray-200 font-medium hover:bg-[#1d2430] rounded-md'>Dashboard</a>
                <a href='#' className='text-white p-2 m-2 text-gray-200 font-medium hover:bg-[#1d2430] rounded-md'>Control</a>
                <a href='#' className='text-white p-2 m-2 text-gray-200 font-medium hover:bg-[#1d2430] rounded-md'>Live Feed</a>
                <a href='#' className='text-white p-2 m-2 text-gray-200 font-medium hover:bg-[#1d2430] rounded-md'>Settings</a>
            </div>
            <button className='mx-5 p-3 hover:scale-110'>
                <img src={bell} alt='Bell' className='h-auto w-6'/>
            </button>
        </nav>
    );
};

export default Navigation;
