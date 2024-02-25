import React, { useState,useEffect } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import logo from "../assets/electro.jpg"
import wallet from "../assets/wallet.jpg"
import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import { Link } from 'react-router-dom';
import {ethers} from "ethers";
import electron from "../contracts/electro.sol/electro.json";
import contract_address from "../smartContractAddress.json";
import {
  BsBoxSeam,
  BsCurrencyRupee
} from "react-icons/bs";
import {
  
  FiBarChart
} from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import ChatBot from './Main/ChatBot';


const array=[{
  icon: <BsBoxSeam />,
  amount: "96",
  percentage: "+23%", 
  title: "Total Waste in Kg",
  iconColor: "rgb(255, 244, 229)",
  iconBg: "rgb(254, 201, 15)",
  pcColor: "green-600",
},{
  icon: <FiBarChart />,
  amount: "87",
  percentage: "+23%",
  title: "Meter Bill (Monthly)",
  iconColor: "rgb(228, 106, 118)",
  iconBg: "rgb(255, 244, 229)",
  pcColor: "green-600",
},{
  icon: <HiOutlineRefresh />,
  amount: "96",
  percentage: "+23%",
  title: "Total Coin Used",
  iconColor: "rgb(0, 194, 146)",
  iconBg: "rgb(235, 250, 242)",
  pcColor: "green-600",
}];



const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();


  /////////////////////////////////////////////////////////////////////////
const [total_amount,setTotal_amount]=useState("");
const [_random,setRandom]=useState(0);
const [count,setCount]=useState(0);


useEffect(() => {
  const returnTotal_amount = async()=>{
    try{
    const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, provider);
        const _people_total_amount = await contract.people_total_amount();
        const data=JSON.parse(
          JSON.stringify(_people_total_amount, (key, value) => {
            return typeof value === "bigint" ? value.toString() : value;
          })
        );
        setTotal_amount(data);
        // console.log("_people_total_amount = "+data);
      }
      catch(e){
        console.log("returnTotal_amount Function At Ecommerce")
      }
   }
   returnTotal_amount();
});


useEffect(() => {
  (async()=>{
    try{
    const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, provider);
        const _people_waste = await contract.people_waste();
        const data1=JSON.parse(
          JSON.stringify(_people_waste, (key, value) => {
            return typeof value === "bigint" ? value.toString() : value;
          })
        );
        array[0].amount=data1;
        // console.log("Waste = "+array[0].amount);
      }
      catch(e){
        console.log("people_waste Function At Ecommerce")
      }
   })();
});

useEffect(() => {
  (async()=>{
    try{
      
      while(true){
        const random= Math.floor(Math.random() * 1000);
        if(random >50 && random < 350){
          array[1].amount=random;
                    break;
        }
      }
      // console.log("Meter Bill ==== "+  array[1].amount);
     
      }
      catch(e){
        console.log("meter_reading Function At Ecommerce")
      }
   })();
},[]);

useEffect(() => {
  (async()=>{
    try{
    const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, provider);
        const _people_deducted_amount = await contract.people_deducted_amount();
        const data2=JSON.parse(
          JSON.stringify(_people_deducted_amount, (key, value) => {
            return typeof value === "bigint" ? value.toString() : value;
          })
        );
        array[2].amount=data2;
        // console.log("people_deducted_amount = "+array[2].amount);
      }
      catch(e){
        console.log("people_deducted_amount Function At Ecommerce")
      }
   })();
});

useEffect(() => {
  setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);
});


// console.log(`ajdiwdiadn == ${contract_address.smartContractAddress}`)
 /////////////////////////////////////////////////////////////////////////


 /////////////////////////////////////////////////////////////////////////
 const [num1, setNum1] = useState();
 const [num2, setNum2] = useState();

 const array2=[
  {
    icon: <BsCurrencyRupee />,
    amount: num1,
    title: " Electricity bill",
    desc: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "n1",
    id:1,
  },
  {
    icon: <BsCurrencyRupee />,
    amount: num2,
    title: " Water bill",
    desc: "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "n2",
    id:2,
  }
]

  const handleInput = (event) => {
    const name = event.target.name;
    console.log(event.target.value);
    const value = event.target.value;
    console.log(name, value);
    if (name=="n1")
      setNum1(value);
    
    if (name=="n2")
    setNum2(value)
    // console.log(compDetails.name);
    // console.log(compDetails.category);
  };


//  useEffect(() => {
  const people_spend=async(p)=>{
    try{
    
        if(p==1){
          console.log(p);
          console.log(num1);
          const provider = new ethers.BrowserProvider(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const signer = await provider.getSigner();
        const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, signer);
          const transaction = await contract.people_spend("0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",num1);
          transaction.wait();
          setNum1(0);
        }
       
        if(p==2){
          const provider = new ethers.BrowserProvider(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const signer = await provider.getSigner();
        const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, signer);
          const transaction = await contract.people_spend("0x617F2E2fD72FD9D5503197092aC168c91465E7f2",num2);
          transaction.wait();
          setNum2(0);

        }
      }
      catch(e){
        console.log("people_spend Function At Ecommerce")
      }
   }
// },[]);

  /////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="flex justify-between mb-2 shadow-md  items-center  mx-4">
        <div className="flex px-1 items-center hover:bg-slate-400 duration-300 rounded-md shadow-md justify-center">
          <h1 className="font-semibold  text-3xl">Electro</h1>
          <img className="w-[25px] h-[25px]" src={logo} />
        </div>

        <div>
          <div className="">
            <ul className="flex text-3xl font-semibold gap-2  justify-center items-center py-2 list-none">
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
      <div className="mt-24">
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
          <div className="bg-white shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg h-[200px] rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">ElectroCoin</p>
                <p className="text-2xl">{total_amount}</p>
              </div>
              <button
                type="button"
                style={{ backgroundColor: currentColor }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
              >
                ₹
              </button>
            </div>
          </div>
          <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
            {array.map((item) => (
              <div
                key={item.title}
                className="bg-white h-[200px] shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
              >
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  {/* <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span> */}
                </p>
                <p className="text-sm text-gray-400  mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white w-[600px] shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
            <div className="flex justify-between items-center gap-2">
              <p className="text-xl font-semibold">Recent Transactions</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className="mt-10 w-72 md:w-400">
              {array2.map((item) => (
                <div key={item.title} className="flex justify-between mt-4 gap-36">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className="text-md font-semibold">{item.title}</p>
                      <p className="w-44 text-sm text-gray-400 break-words">{item.desc}</p>
                    </div>
                  </div>
                  {/* <p className={`text-${item.pcColor}`}>{item.amount}</p> */}
                  <div className='h-8 flex flex-row gap-4'>
                    {/* <input placeholder='Enter' className='w-24 bg-orange-400'></input> */}
                    <input
                type="number"
                autoComplete="off"
                value={item.amount}
                onChange={handleInput}
                name={item.pcColor}
                id={item.pcColor}
                placeholder="Coin"
                className='w-24 bg-orange-400'></input>
                    <button onClick={()=>people_spend(item.id)}>Send</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Add"
                  borderRadius="10px"
                />
              </div>

              <p className="text-gray-400 text-sm">36 Recent Transactions</p>
            </div>
          </div>
          <div>
            <div
              className=" rounded-2xl shadow-lg h-[600px] md:w-400 p-4 m-3"
              style={{ backgroundColor: currentColor }}
            >
              <div className="flex justify-between items-center ">
                <p className="font-semibold text-white text-2xl">Earnings</p>

                <div>
                  <p className="text-2xl text-white font-semibold mt-8">
                    Rs3,448.78
                  </p>
                  <p className="text-gray-200">Monthly revenue</p>
                </div>
              </div>

              <div className="mt-[300px]">
                <SparkLine
                  currentColor={currentColor}
                  id="column-sparkLine"
                  height="100px"
                  type="Column"
                  data={SparklineAreaData}
                  width="320"
                  color="rgb(242, 252, 253)"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="md:w-800 shadow-lg bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
