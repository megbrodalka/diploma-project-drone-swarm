import React, {useState} from 'react';
import DroneInfo  from './DroneInfo';
import droneList from './DroneList';

const ViewAllDrones = () => {
    const [drones, setDrones] = useState(droneList);

    const handleDelete = (id) => {
        const updatedDrones = drones.filter(drone => drone.id !== id);
        setDrones(updatedDrones);
    };


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