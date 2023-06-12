import React, {useState, useEffect} from 'react';

const ErrorPopup = ({ title, message, info, onClose }) => {
    const [open, setIsOpen] = useState(true);

    useEffect(() => {
        setIsOpen(true);
      }, []);

  const togglePopup = () => {
    setIsOpen(false);
    onClose();
  };

    return (
        <>
            { open && (
                <div className="bg-gray-950 w-full h-screen absolute inset-0 flex items-center justify-center bg-opacity-50">
                  <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto bg-white rounded-lg p-6 dark:bg-gray-700">
                      <h1 className="text-xl text-gray-700 dark:text-white text-center mb-3">{title}</h1>
                      <p className="text-center text-gray-500 dark:text-gray-300 mb-3">{message}: {info}</p>
                      <button className="w-full bg-blue-700 text-white p-1 mt-2 rounded-lg hover:bg-blue-800
                        dark:bg-blue-600 dark:hover:bg-blue-700" onClick={togglePopup}>
                          OK
                      </button>
                  </div>
                </div>
            )}
        </>
    );
}

export default ErrorPopup