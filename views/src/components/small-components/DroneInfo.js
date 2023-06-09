import React from 'react'
import logo from '../../images/drone-logo.png'
import Status from './Status'
import bin from "../../images/bin.png"

const DroneInfo = ({ drone, onDelete }) => {
    const { name, ip, status, battery } = drone;

    const handleDelete = () => {
        onDelete(drone.id);
    };

    return (
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
              <button className='drone-delete-button ' onClick={handleDelete}>
                  <img src={bin} alt='Delete' className='h-auto w-5'/>
              </button>
          </td>
    </tr>
  )
}

export default DroneInfo;
