import React from "react";
import logo from "../../assets/electro.jpg";
import { Link } from "react-router-dom";
import img1 from "../../assets/img1.jpg";
import bitcoin from "../../assets/bitcoin.jpg";
import women from "../../assets/women.jpg";
import wallet from "../../assets/wallet.jpg"
import metic from "../../assets/metic.jpg";

const Home = () => (
  <div className="w-[1024px] mx-auto">
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
    <div className="container items-center justify-center h-full flex gap-2 ">
      <div className=" w-[500px] h-[1000px] ">
        <h1 className="text-6xl mt-[400px] mx-2  px-6   font-bold rounded-lg  shadow-lg capitalize">
          Welcome to ElectroLite
        </h1>
        <p className="py-[20px] px-2 font-semibold">
          The Waste-to-Energy Platform is a decentralized solution designed to
          revolutionize how we manage organic waste and harness renewable
          energy. By connecting households and businesses with local
          waste-to-energy conversion facilities, our platform incentivizes
          eco-friendly waste disposal while promoting the generation of clean
          energy. ♻️
        </p>
        <div className="gap-2 flex items-center px-3 py-[100px]  ">
          <button className="px-4 py-2 bg-black hover:bg-white hover:text-black duration-500 ease-in-out hover:border-black hover:border-1 text-white text-xl rounded-lg  font-semibold">
            Connect Wallet
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 text-xl rounded-lg font-semibold">
            How we work
          </button>
        </div>
      </div>

      <div className="w-[350px]  flex  h-[1000px]">
        <div className=" flex flex-col justify-center items-center  h-[1000px] w-[200px]">
          <div className="w-[150px] flex items-center justify-center   rounded-full h-[150px] border-black border-1">
            <img src={img1} className="w-[100px] h-[100px]" alt="img1" />
          </div>
          <div className="h-[500px] w-[150px] border-black border-1 rounded-full">
            <div className="rounded-full flex items-center justify-center border-black border-1 w-[150px] h-[150px]">
              <img
                src={metic}
                className="w-[100px] h-[100px]"
                alt="bitcoin"
              />
            </div>
          </div>
          <div className="w-[150px] flex items-center justify-center   rounded-full h-[150px] border-black border-1">
            <img src={women} className="w-[100px] h-[100px]" alt="img1" />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center  h-[1000px] w-[200px]">
          <div className="w-[150px] flex items-center justify-center   rounded-full h-[150px] border-black border-1">
            <img src={women} className="w-[100px] h-[100px]" alt="img1" />
          </div>
          <div className="h-[500px] w-[150px] border-black border-1 rounded-full">
            <div className="rounded-full flex items-center justify-center border-black border-1 w-[150px] h-[150px]">
              <img
                src={bitcoin}
                className="w-[100px] h-[100px]"
                alt="bitcoin"
              />
            </div>
          </div>
          <div className="w-[150px] flex items-center justify-center   rounded-full h-[150px] border-black border-1">
            <img src={img1} className="w-[100px] h-[100px]" alt="img1" />
          </div>
        </div>
      </div>
      <div className=" ml-[10px] flex   w-[500px] h-[1000px]">
        <div className="shadow-lg rounded-md bg-yellow-200 flex flex-col items-center justify-center  text-black hover:w-[600px] hover:duration-500 ease-in-out border-black w-[130px] h-[1000px]">
          <h1 className="transform -rotate-90 pl-[200px] text-4xl font-bold text-black">
            Electro
          </h1>
          <div>.....</div>
        </div>
        <div className=" bg-purple-600 shadow-lg flex flex-col items-center justify-center  rounded-md text-black  hover:w-[600px] hover:duration-500 ease-in-out border-black w-[130px] h-[1000px]">
          <h1 className="transform -rotate-90 pl-[200px] text-4xl font-bold text-black">
            Wallet
          </h1>
          <div>.....</div>
        </div>
        <div className=" bg-green-800  shadow-lg flex flex-col items-center justify-center  rounded-md text-white  hover:w-[600px] hover:duration-500 ease-in-out border-black w-[130px] h-[1000px]">
          <h1 className="transform -rotate-90 pl-[200px] text-4xl font-bold text-black">
            Crypto
          </h1>
          <div>.....</div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
