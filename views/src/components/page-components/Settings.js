import React, {useContext} from 'react'
import {ThemeContext} from "../small-components/Theme";

const Settings = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className="m-8">
            <h1 className="font-semibold text-xl text-gray-600 dark:text-white">Settings</h1>

            <div className="theme ">
                <h1 className="my-4 bg-gray-100 border-b border-gray-300 dark:bg-neutral-600 dark:border-neutral-800
                text-gray-400 font-medium p-1">
                    Theme
                </h1>

                <div className="flex flex-col">
                    <label>
                        <input type="radio" name="theme" value="light" onChange={toggleTheme} checked={theme === "light"}
                        className="mr-4"/>
                        <span className="text-lg dark:text-gray-300">Light</span>
                    </label>

                    <label>
                        <input type="radio" name="theme" value="dark" onChange={toggleTheme} checked={theme === "dark"}
                        className="mr-4"/>
                        <span className="text-lg dark:text-gray-300">Dark</span>
                    </label>
                </div>
            </div>


        </div>
    );
}

export default Settings;