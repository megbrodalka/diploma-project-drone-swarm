import React, {useState} from 'react'
import logo from '../../images/drone-logo.png'
import Status from './Status'
import bin from "../../images/bin.png"

const DroneInfo = ({ drone, onDelete }) => {
    const { name, ip, status, battery } = drone;

    const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

    const handleDelete = () => {
        onDelete(drone.id);
        toggleDeletePopup();
    };

    const toggleDeletePopup = () => {
        setDeleteConfirmOpen(!isDeleteConfirmOpen);
    };

    return (
        <>
            <tr className='border-b border-gray-200 dark:border-neutral-800'>
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <img src={logo} alt="Drone" className="w-8 h-auto mr-3" />
                  <div className="flex flex-col">
                    <span className="text-black font-semibold dark:text-white">{name}</span>
                    <span className="text-gray-400 dark:text-gray-400">{ip}</span>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4"><Status status={status}/></td>
              <td className="py-2 px-4 text-stone-700 dark:text-stone-300">{battery}</td>
              <td className="py-2 px-4">

                  <button className='drone-delete-button ' onClick={toggleDeletePopup}>
                      <img src={bin} alt='Delete' className='h-auto w-5'/>
                  </button>

              </td>
            </tr>

            {isDeleteConfirmOpen && (
                <div className="bg-gray-950 w-full h-screen absolute inset-0 flex items-center justify-center bg-opacity-50">
                    <div className="sm:w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto bg-white rounded-lg p-6 dark:bg-gray-700">
                        <h1 className="text-center white mb-2 text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this drone?<br />
                            <span className="font-semibold">This action cannot be undone.</span>
                        </h1>

                        <div className="flex">
                            <button
                                onClick={handleDelete}
                                className="mx-3 w-full bg-red-600 text-white p-1.5 mt-2 rounded-lg hover:bg-red-700
                                ">
                                Delete
                            </button>

                            <button
                                onClick={toggleDeletePopup}
                                className="mx-3 w-full bg-white text-gray-600 border border-gray-200 p-1 mt-2 rounded-lg
                                 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300
                                 dark:hover:bg-gray-600">
                                Go back
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </>
  );
}

export default DroneInfo;
