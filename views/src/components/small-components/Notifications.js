import React, {useState} from "react";
import bell from "../../images/bell.svg";

// return (
    //     <button className='mx-5 p-3 hover:scale-110'>
    //         <img src={bell} alt='Bell' className='h-auto w-5'/>
    //     </button>
    // );

const Notifications = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleButtonClick = () => {
        setIsPopupVisible(!isPopupVisible);
    }

    return (
    <div className="relative">
      <button className="mx-5 p-3 hover:scale-110" onClick={handleButtonClick}>
        <img src={bell} alt="Bell" className="h-auto w-5" />
      </button>

      {isPopupVisible && (
        <div className="absolute z-50 w-1/6 h-1/4 mt-2 p-4 bg-white rounded shadow float-right">
          <div className="">
            {/* Content of the pop-up window */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications