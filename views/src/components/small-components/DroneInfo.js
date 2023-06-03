import React from 'react'
import logo from '../../images/drone-logo.png'
import Online from './Online'
import Offline from './Offline'
import bin from "../../images/bin.png"

const DroneInfo = ({ drone, onDelete }) => {
    const { name, ip, status, battery } = drone;

    const handleDelete = () => {
        onDelete(drone.id);
    };

    const getStatusComponent = () => {
        if (status === 'Online') {
            return <Online/>
        } else if (status === 'Offline') {
            return <Offline/>
        }
    }

    return (
        <tr className='border-b border-gray-200'>
          <td className="py-2 px-4">
            <div className="flex items-center">
              <img src={logo} alt="Drone" className="w-8 h-auto mr-3" />
              <div className="flex flex-col">
                <span className="text-black font-semibold">{name}</span>
                <span className="text-gray-400 ">{ip}</span>
              </div>
            </div>
          </td>
          <td className="py-2 px-4">{getStatusComponent()}</td>
          <td className="py-2 px-4 text-gray-500 font-semibold">{battery}</td>
          <td className="py-2 px-4">
              <button className='drone-delete-button hover:scale-110' onClick={handleDelete}>
                  <img src={bin} alt='Delete' className='h-auto w-5'/>
              </button>
          </td>
    </tr>
  )
}

export default DroneInfo;
