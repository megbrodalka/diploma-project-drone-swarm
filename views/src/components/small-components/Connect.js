import React from 'react'
import axios from "axios";

const Connect = ({ drones, port }) => {
    const handleConnect = async () => {
        const droneIPs = drones.map(drone => drone.ip);  // Extract the IPs from the drones array

        try {  // Send the ips to the 'connect' endpoint
            const data = {ips: droneIPs}
            console.log(data)
            const response = await axios.post(`${port}/api/connect`, data)
            console.log(response)

        } catch (error) {
            console.error("Error sending connect POST request: ", error)
        }

    }

    return (
        <button className="text-gray-900 py-1 px-5 rounded-lg float-right text-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
        onClick={handleConnect}>
        Connect
        </button>
    )
}

export default Connect