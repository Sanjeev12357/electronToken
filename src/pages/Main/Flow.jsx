import React from 'react'

import flow from "../../assets/CPCP.png"
import wallet from "../../assets/wallet.jpg";
import logo from "../../assets/electro.jpg";
import { Link } from 'react-router-dom';

const Flow = () => {
  return (
    <>
      <div className="flex justify-between items-center  mx-4">
        <div className="flex px-1 items-center rounded-md shadow-md justify-center">
          <h1 className="font-semibold  text-xl">Electro</h1>
          <img className="w-[25px] h-[25px]" src={logo} />
        </div>

        <div>
          <div className="">
            <ul className="flex text-xl font-semibold gap-2  justify-center items-center py-2 list-none">
              <li className="px-4 rounded-md shadow-lg">
                <Link to="/Home">Home</Link>
              </li>
              <li className="px-4 rounded-md shadow-lg">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="px-4 rounded-md shadow-lg">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="px-4 rounded-md shadow-lg">
                <Link to="/announcements">Announcements</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <button className="rounded-md shadow-lg mr-[20px]   text-xl font-semibold">
            <img
              className="w-[30px] rounded-full shadow-xl hover:translate-y-[-5px] h-[30px]"
              src={wallet}
              alt="wallet"
            />
          </button>
        </div>
      </div>
      <div className="flex  items-center justify-center mt-1  ">
        <div className="rounded-lg w-[900px] h-[700px] flex items-center justify-center shadow-2xl ">
          <img className="w-full h-full" src={flow} alt="flowdiagram" />
        </div>
      </div>
    </>
  );
}

export default Flow