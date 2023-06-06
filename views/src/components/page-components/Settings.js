import React, {useContext} from 'react'
import {ThemeContext} from "../small-components/theme";

const Settings = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className="w-full h-auto">
            <button className="bg-green-200 p-4 dark:bg-gray-500" onClick={toggleTheme}>
                Dark Mode
            </button>
        </div>
    );
}

export default Settings;