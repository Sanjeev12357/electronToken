import React, { useEffect, useState } from 'react';


import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../assets/sonali.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import {ethers} from "ethers";
import electron from "../contracts/electro.sol/electro.json";
import contract_address from "../smartContractAddress.json";


const Navbar = () => {
  const {  activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);


  ///////////////////////

const [value,setValue]=useState(false);
const [address,setAddress]=useState("");
const [balance,setBalance]=useState("");


  const Wallet =async ()=>{

    try{
      const provider = new ethers.BrowserProvider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = await provider.getSigner();
      const _address = await signer.getAddress();
      const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, provider);
      const _balance=await contract.balanceOf(_address);
      const io=JSON.parse(
        JSON.stringify(_balance, (key, value) => {
          return typeof value === "bigint" ? value.toString() : value;
        })
      );
      setValue(true);
      setAddress(_address);
      setBalance(io);
      // console.log(_address);
      // console.log(_balance);
      // console.log(io)
    }
    catch(e){
      console.log("Wallet Function At Navbar")
    }
  
  }
  
// console.log(contract_address.smartContractAddress)

  ////////////////////////
  

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

      
      <div className="flex-end ml-[500px]">
       
       
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={Wallet}
          >
         {value? <p>{address} ------ {balance}</p> : <p className='bg-black text-white rounded-md shadow-md'>Connect Wallet</p> }  
           
          </div>
        </TooltipComponent>

        
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  );
};

export default Navbar;
