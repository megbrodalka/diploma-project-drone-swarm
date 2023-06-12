import React, { useState } from 'react';

const AddDrone = ({ onAddDrone }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [ip, setIp] = useState('');
  const [error, setError] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setError('The name field must not be empty');
    } else if (!validateIP(ip)) {
      setError('Invalid IP format');
    } else {
      setError('');
      setIsOpen(false);
      onAddDrone(name.toString(), ip.toString());
    }
  };

  const validateIP = (value) => {
    const ipFormat = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipFormat.test(value);
  };

  const formLabelStyle = 'text-sm mb-2 dark:text-gray-200';
  const formInputStyle =
    'p-2 mb-3 bg-gray-100 rounded-lg border border-gray-300 placeholder:text-sm font-light' +
    ' placeholder:text-gray-400 text-sm' +
    ' dark:bg-gray-600 dark:border-gray-500 dark:caret-white dark:text-white';

  return (
    <div>
      <button
        className="bg-blue-700 text-white mx-2 px-5 py-1 rounded-lg float-right text-sm hover:bg-blue-800
        dark:bg-[#1a56db] dark:hover:bg-blue-700"
        onClick={togglePopup}
      >
        Add
      </button>

      {isOpen && (
        <div className="bg-gray-950 w-full h-screen absolute inset-0 flex items-center justify-center bg-opacity-50">
          <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto bg-white rounded-lg p-6 dark:bg-gray-700">
            <div className="flex items-center justify-between mb-5">
              <h1 className="text-xl dark:text-white">Add Drone</h1>
              <button
                className="px-2 rounded-lg text-lg text-gray-500 hover:bg-gray-200 hover:text-black
                dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name" className={formLabelStyle}>
                  Drone Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={formInputStyle}
                  placeholder="My Drone"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="ip" className={formLabelStyle}>
                  IP Address
                </label>
                <input
                  type="text"
                  id="ip"
                  name="ip"
                  value={ip}
                  onChange={(e) => setIp(e.target.value)}
                  className={formInputStyle}
                  placeholder="192.168.1.1"
                />
                {error && (
                  <small className="py-1 mb-2 text-red-600 text-xs dark:text-red-500">{error}</small>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white p-1 mt-2 rounded-lg hover:bg-blue-800
                dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Add Drone
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddDrone;
