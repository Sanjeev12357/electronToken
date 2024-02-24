import React from 'react'

import flow from "../../assets/CPCP.png"

const Flow = () => {
  return (
    <div className="flex  items-center justify-center ">
      <div className="rounded-lg w-[700px] h-[700px] flex items-center justify-center shadow-lg ">
        <img src={flow} alt="flowdiagram" />
      </div>
    </div>
  );
}

export default Flow