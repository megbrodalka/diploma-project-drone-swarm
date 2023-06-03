import React from 'react';

const AddDrone = () => {
    return (
        <div className="w-auto h-auto m-10">
            <h1 className="m-4 bg-gray-100 border-b border-gray-300 py-2 px-4 text-gray-400 rounded">Add Drone</h1>

            <form className="m-4 p-4 bg-gray-100 rounded">

                <div className="mb-4">
                    <label htmlFor="name" className="block">Name:</label>
                    <input type="text" id="name" name="name" className="border border-gray-300 rounded-md p-2"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="ip" className="block">IP Address:</label>
                    <input type="text" id="ip" name="ip" className="border border-gray-300 rounded-md p-2"/>
                </div>

                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Drone</button>
            </form>
        </div>
    );
}

export default AddDrone;