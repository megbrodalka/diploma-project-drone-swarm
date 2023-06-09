import React, {useState} from "react";
import bell from "../../images/bell.svg";

// return (
    //     <button className='mx-5 p-3 hover:scale-110'>
    //         <img src={bell} alt='Bell' className='h-auto w-5'/>
    //     </button>
    // );

const Notifications = () => {
    return (
        <div>
          <button className="mx-5 p-3 font-b">
            <img src={bell} alt="Bell" className="h-auto w-5" />
          </button>
        </div>
    );
}

export default Notifications