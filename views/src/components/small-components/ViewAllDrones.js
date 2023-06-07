import React, {useState, useEffect} from 'react';
import DroneInfo  from './DroneInfo';
import axios from 'axios';
import AddDrone from "./AddDrone";
import Connect from "./Connect";

const port = "http://127.0.0.1:8000"

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
            const response = await axios.get(`${port}/api/drones`);
            setDrones(response.data);
        } catch (error) {
            console.error("Error fetching drones: ", error);
        }
    }

    const addDrone = async (name, ip) => {
        try {
            const data = {name: name, ip: ip};
            const response = await axios.post(`${port}/api/drones`, data);
            const newDrone = response.data;
            setDrones((prevDrones) => [...prevDrones, newDrone]);
        } catch (error) {
            console.error("Error adding drone: ", error);
        }
    }

    const deleteDrone = async (id) => {
        try {
            await axios.delete(`${port}/api/drones/${id}`);
            setDrones((prevDrones) => prevDrones.filter((drone) => drone.id !== id));
        } catch (error) {
            console.error("Error deleting drone: ", error);
        }
    }

    return (
        <div className="m-8">
            <div className="flex items-center justify-between mb-4">
                <h1 className="font-semibold text-xl text-gray-600 dark:text-white">Dashboard</h1>

                <div className="flex items-center ">
                    <Connect drones={drones} port={port}/>
                    <AddDrone onAddDrone={addDrone}/>
                </div>

            </div>

            <table className="w-full table-auto">

                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300 dark:bg-neutral-600 dark:border-neutral-800">
                    <th className="py-2 px-4 text-left text-xs text-gray-400 font-medium w-auto">NAME</th>
                    <th className="py-2 px-4 text-left text-xs text-gray-400 font-medium w-auto">STATUS</th>
                    <th className="py-2 px-4 text-left text-xs text-gray-400 font-medium w-auto">BATTERY</th>
                    <th className="py-2 px-4 text-left text-xs text-gray-400 font-medium w-auto">DELETE</th>
                  </tr>
                </thead>

                <tbody>
                    {drones.map((drone) => (
                        <DroneInfo key={drone.id} drone={drone} onDelete={deleteDrone} />
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default ViewAllDrones;