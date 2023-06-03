import React, {useState, useEffect} from 'react';
import DroneInfo  from './DroneInfo';
import axios from 'axios';

const port = "http://127.0.0.1:8001"

const ViewAllDrones = () => {
    // Variable called drones, and a setter function called setDrones
    // The initial value of drones is an empty array
    // The useState returns an array with two elements, drones and setDrones
    const [drones, setDrones] = useState([]);

    // Used to fetch the drone data and update the drones state
    useEffect(() => {
        fetchDrones();
    }, []);

    const fetchDrones = async () => {
        try {
            const response = await axios.get(`${port}/drones`);
            setDrones(response.data);
        } catch (error) {
            console.error("Error fetching drones: ", error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${port}/drones/${id}`);
            setDrones((prevDrones) => prevDrones.filter((drone) => drone.id !== id));
        } catch (error) {
            console.error("Error deleting drone: ", error);
        }
    }

    return (
        <div className="m-8">
            <table className="w-full table-auto">

                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300">
                    <th className="py-2 px-4 text-left text-xs text-gray-400 font-medium w-auto">NAME</th>
                    <th className="py-2 px-4 text-left text-xs text-gray-400 font-medium w-auto">STATUS</th>
                    <th className="py-2 px-4 text-left text-xs text-gray-400 font-medium w-auto">BATTERY</th>
                    <th className="py-2 px-4 text-left text-xs text-gray-400 font-medium w-auto">DELETE</th>
                  </tr>
                </thead>

                <tbody>
                    {drones.map((drone) => (
                        <DroneInfo key={drone.id} drone={drone} onDelete={handleDelete} />
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default ViewAllDrones;