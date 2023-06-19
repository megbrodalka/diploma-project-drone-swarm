import React, {useState} from 'react';
import axios from "axios";
import ErrorPopup from "./ErrorPopup";

const Controls = () => {
    const [takeOff, setTakeOff] = useState(false);
    const [error, setError] = useState([]);

    const port = "http://localhost:8000/api";

    const clearError = () => {
        setError([]);
    };

    const handleTakeOff = async () => {
        if (takeOff === false) {
            try {
                // await axios.post(`${port}/takeoff`);
                setTakeOff(true);
            } catch (error) {
                setError(["Error taking off", error.name, error.message]);
                console.error('Error taking off:', error);
            }
        }
    }

    const handleLand = async () => {
        if (takeOff === true) {
            try {
                // await axios.post(`${port}/land`)
                setTakeOff(false);
            } catch (error) {
                setError(["Error landing", error.name, error.message]);
                console.error('Error landing:', error);
            }
        }
    }

    return (
        <div>
            { takeOff ? (
                    <button className="text-gray-900 py-1 px-5 rounded-lg float-right text-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700
                    dark:bg-[#1f2937] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
                            onClick={handleLand}>Land</button>
                ) : (
                    <button className=""
                        onClick={handleTakeOff}>Take off</button>
            )}
        </div>
    );
}

export default Controls;