import React from 'react';
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
import Chatbot from './Main/ChatBot';


const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

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
                <p className="font-bold text-gray-400">Coins</p>
                <p className="text-2xl">3,448.78</p>
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
            {earningData.map((item) => (
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
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
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
              {recentTransactions.map((item) => (
                <div key={item.title} className="flex justify-between mt-4">
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
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
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
            <div>
              <Chatbot />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
