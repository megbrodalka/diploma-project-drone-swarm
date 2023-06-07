import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/drone-logo.png';
import Notifications from "./Notifications";

const Navigation = () => {
    const navTextStyle = 'text-stone-700 p-1 m-2 text-gray-200 hover:text-blue-600 font-medium text-sm ' +
        'dark:hover:bg-zinc-900';

    return (
        <nav className='bg-white w-full flex flex-wrap items-center border-y border-gray-300 dark:bg-zinc-800'>
            <div className='w-full lg:w-3/5 mx-auto flex items-center justify-between p-3'>
              <div className='flex items-center'>
                <img src={logo} alt='Drone' className='h-auto w-12 mr-2' />
                <h1 className='text-xl font-medium text-stone-700'>InterSwarmX</h1>
              </div>

              <div className='flex-grow'></div>

              <div className='flex flex-wrap lg:flex-nowrap'>
                <Link to='/dashboard' className={navTextStyle}>
                  Dashboard
                </Link>

                <Link to='/control' className={navTextStyle}>
                  Control
                </Link>

                <Link to='/livefeed' className={navTextStyle}>
                  Live Feed
                </Link>

                <Link to='/settings' className={navTextStyle}>
                  Settings
                </Link>
              </div>

              <Notifications />
            </div>
        </nav>
    );
};

export default Navigation;
