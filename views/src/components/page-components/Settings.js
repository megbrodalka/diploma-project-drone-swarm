import React, {useContext} from 'react'
import {ThemeContext} from "../small-components/Theme";

const Settings = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const toggleText = theme === 'dark' ? 'On' : 'Off';

    return (
        <div className="m-8 lg:w-3/5 mx-auto px-10">
            <h1 className="font-semibold text-xl text-gray-600 dark:text-white">Settings</h1>

            {/*Line Break*/}
            <div className="relative flex py-4 items-center">
                <div className="w-full border-b border-gray-300 dark:border-gray-700"></div>
            </div>

            <div className="theme">
                <h1 className="text-stone-700 text-lg mb-3 dark:text-gray-300">
                    Dark Mode
                </h1>

                {/*https://flowbite.com/docs/forms/toggle/*/}
                <label className="relative inline-flex items-center mb-5 cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                  />
                  <div
                    className={`w-11 h-6 bg-gray-200 ${
                      theme === 'dark' ? 'bg-blue-600' : ''
                    } peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700`}
                  >
                    <span
                      className={`after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300
                       after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${
                        theme === 'dark'
                          ? 'after:content-[""] after:border-white after:translate-x-full'
                          : ''
                      }`}
                    ></span>
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {toggleText}
                  </span>
                </label>

            </div>

        </div>
    );
}

export default Settings;