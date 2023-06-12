import React, {useState, useEffect} from 'react';
import DroneInfo  from './DroneInfo';
import axios from 'axios';
import AddDrone from "./AddDrone";
import Connect from "./Connect";
import ErrorPopup from "./ErrorPopup";

const port = "http://127.0.0.1:8000"

const ViewAllDrones = () => {
    // Variable called drones, and a setter function called setDrones
    // The initial value of drones is an empty array
    // The useState returns an array with two elements, drones and setDrones
    const [drones, setDrones] = useState([]);
    const [error, setError] = useState([]);

    // Used to fetch the drone data and update the drones state
    useEffect(() => {
        fetchDrones();
    }, []);

    const clearError = () => {
        setError([]);
    };

    const fetchDrones = async () => {
        try {
            const response = await axios.get(`${port}/api/drones`);
            setDrones(response.data);
        } catch (error) {
            setError(["Error fetching drones", error.name, error.message]);
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
            setError(["Error adding drone", error.name, error.message]);
            console.error("Error adding drone: ", error);
        }
    }

    const deleteDrone = async (id) => {
        try {
            await axios.delete(`${port}/api/drones/${id}`);
            setDrones((prevDrones) => prevDrones.filter((drone) => drone.id !== id));
        } catch (error) {
            setError(["Error deleting drone", error.name, error.message]);
            console.error("Error deleting drone: ", error);
        }
    }

    const tableCategoryStyle = "py-2 px-4 text-left text-xs text-stone-700 font-bold w-auto " +
        "dark:text-gray-400"

    return (
        <div className="m-8">

            {error.length > 0 && (
                <ErrorPopup title={error[0]} message={error[1]} info={error[2]} onClose={clearError} />
            )}

            <div className="flex items-center justify-between mb-4">
                <h1 className="font-semibold text-xl text-stone-700 dark:text-white">Dashboard</h1>

                <div className="flex items-center ">
                    <Connect drones={drones} port={port}/>
                    <AddDrone onAddDrone={addDrone}/>
                </div>

            </div>

            <table className="w-full table-auto">

                <thead>
                  <tr className="bg-[#f9fafb] dark:bg-[#374151]">
                    <th className={tableCategoryStyle}>NAME</th>
                    <th className={tableCategoryStyle}>STATUS</th>
                    <th className={tableCategoryStyle}>BATTERY</th>
                    <th></th>
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