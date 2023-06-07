import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AddDrone = ({ onAddDrone }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [ip, setIp] = useState('');

  const [error, setError] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setError("The name field must not be empty")
    } else if (!validateIP(ip)) {
      setError("Invalid IP format")
    } else {
      setError('')
      onAddDrone(name.toString(), ip.toString())
      setIsOpen(false)
    }
  }

  // Chat GPT
  const validateIP = (value) => {
    const ipFormat = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipFormat.test(value)
  };

  return (
    <div>
      <button
        className="bg-blue-700 text-white mx-2 px-5 py-1 rounded-lg float-right text-sm hover:bg-blue-800"
        onClick={togglePopup}>
        Add
      </button>

      <Popup open={isOpen}>
        <div className="popup p-4 dark:bg-neutral-700">
          <h2 className="my-2 font-semibold text-gray-600 dark:text-white">Add Drone</h2>
          <form onSubmit={handleSubmit}>

            <div className="flex flex-col">
              <label htmlFor="name" className="bg-gray-100 border-b border-gray-300 p-1 text-xs text-gray-400 font-medium
              dark:bg-neutral-600 dark:border-neutral-800">
                NAME
              </label>

              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
              className="dark:bg-neutral-700 dark:text-white"/>
            </div>

            <div className="flex flex-col">

              <label htmlFor="ip" className="bg-gray-100 border-b border-gray-300 p-1 text-xs text-gray-400 font-medium
              dark:bg-neutral-600 dark:border-neutral-800">
                IP ADDRESS
              </label>

              <input type="text" id="ip" name="ip" value={ip} onChange={(e) => setIp(e.target.value)}
              className="dark:bg-neutral-700 dark:text-white"/>

              {error && <small className="py-1 text-red-500 text-xs font-semibold">{error}</small>}
            </div>

            <button type="submit" className=" mt-2 bg-[#6466f0] text-white py-1 px-5 rounded-lg text-sm hover:scale-105">Add</button>

          </form>
        </div>
      </Popup>
    </div>
  );
};

export default AddDrone;


