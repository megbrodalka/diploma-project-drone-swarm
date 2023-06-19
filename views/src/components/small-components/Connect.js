import React, {useState} from 'react'
import axios from "axios";
import ErrorPopup from "./ErrorPopup";

const Connect = ({ drones, port }) => {
    const [error, setError] = useState([]);
    const [connected, setConnected] = useState(false);

    const handleConnect = async () => {
        if (connected === false) {
            const droneIPs = drones.map(drone => drone.ip);  // Extract the IPs from the drones array

            try {  // Send the ips to the 'connect' endpoint
                const data = {ips: droneIPs};
                console.log(data);
                const response = await axios.post(`${port}/api/connect`, data);
                console.log(response);
                setConnected(true);

            } catch (error) {
                setError(["Error connecting drones", error.name, error.message]);
                console.error("Error sending connect POST request: ", error);
            }
        }
    }

    const handleDisconnect = async () => {
        if (connected === true) {
            try {
                const response = await axios.post(`${port}/api/disconnect`);
                console.log(response);
                setConnected(false);
            } catch (error) {

            }
        }
    }

    const clearError = () => {
        setError([]);
    };

    return (
        <>
            {error.length > 0 && (
                <ErrorPopup title={error[0]} message={error[1]} info={error[2]} onClose={clearError} />
            )}

            { connected ? (
                <button
                    className="text-gray-900 py-1 px-5 rounded-lg float-right text-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700
                            dark:bg-[#1f2937] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
                    onClick={handleDisconnect} >
                    Disconnect
                </button>
            ) : (
                <button className="text-gray-900 py-1 px-5 rounded-lg float-right text-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700
                    dark:bg-[#1f2937] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
                    onClick={handleConnect}>
                    Connect
                </button>
            )}

        </>
    )
}

export default Connect