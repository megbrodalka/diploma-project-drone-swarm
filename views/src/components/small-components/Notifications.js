import React, {useState} from "react";
import bell from "../../images/bell.svg";


const Notifications = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
    <>
      <div>
        <button
          className="mx-5 p-3 font-b"
          onClick={toggleDrawer} >
          <img src={bell} alt="Bell" className="h-auto w-5" />
        </button>
      </div>



    </>
  );
}

export default Notifications;