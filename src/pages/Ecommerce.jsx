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
const [gol,setGol]=useState("")
const [gol2,setGol2]=useState("")


const array=[{
  icon: <BsBoxSeam />,
  amount: gol,
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
  amount: gol2,
  percentage: "+23%",
  title: "Total Coin Used",
  iconColor: "rgb(0, 194, 146)",
  iconBg: "rgb(235, 250, 242)",
  pcColor: "green-600",
  }];

useEffect(() => {
const returnTotal_amount = async()=>{
try{
const provider = new ethers.BrowserProvider(window.ethereum);
await window.ethereum.request({ method: "eth_requestAccounts" });
const signer = await provider.getSigner();
const _address = await signer.getAddress();
const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, provider);
const _people_total_amount = await contract.people_total_amount(_address);
const data=JSON.parse(
JSON.stringify(_people_total_amount, (key, value) => {
return typeof value === "bigint" ? value.toString() : value;
})
);
setTotal_amount(data);
console.log("_people_total_amount = "+data);
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
await window.ethereum.request({ method: "eth_requestAccounts" });
const signer = await provider.getSigner();
const _address = await signer.getAddress();
const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, provider);
const _people_waste = await contract.people_waste(_address);
const data1=JSON.parse(
JSON.stringify(_people_waste, (key, value) => {
return typeof value === "bigint" ? value.toString() : value;
})
);
setGol(data1);
// array[0].amount=data1;
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
await window.ethereum.request({ method: "eth_requestAccounts" });
const signer = await provider.getSigner();
const _address = await signer.getAddress();
const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, provider);
const _people_deducted_amount = await contract.people_deducted_amount(_address);
const data2=JSON.parse(
JSON.stringify(_people_deducted_amount, (key, value) => {
return typeof value === "bigint" ? value.toString() : value;
})
);
setGol2(data2);
// array[2].amount=data2;
// console.log("people_deducted_amount = "+array[2].amount);
}
catch(e){
console.log("people_deducted_amount Function At Ecommerce")
}
})();
});

// useEffect(() => {
// setTimeout(() => {
// setCount((count) => count + 1);
// }, 1000);
// });

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

// useEffect(() => {
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
const [array33,setArray33]=useState([]);
const [result,setResult]=useState([]);

useEffect(() => {
(async()=>{
try{
const provider = new ethers.BrowserProvider(window.ethereum);
await window.ethereum.request({ method: "eth_requestAccounts" });
const signer = await provider.getSigner();
const _address = await signer.getAddress();
const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, provider);
const _fetching_log_int = await contract.fetching_log_int(_address);
setArray33(_fetching_log_int);
console.log("fetching_log_int = "+_fetching_log_int);
console.log("fetching_log_int typeeeeeeeeee = "+typeof(_fetching_log_int));

}
catch(e){
console.log("fetching_log_int Function At Ecommerce")
}
})();
});

// array33.map((val)=>{
// (async(p)=>{
// try{
// const provider = new ethers.BrowserProvider(window.ethereum);
// // await window.ethereum.request({ method: "eth_requestAccounts" });
// // const signer = await provider.getSigner();
// const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, provider);
// const transaction = await contract.fetching_log_data(p);
// transaction.wait();
// console.log("adwdkawndkaw = "+transaction);
// setResult([...transaction,{transaction}]);
// console.log(result);
// }
// catch(e){
// console.log("people_spend Function At Ecommerce")
// }
// })(val);

// })

// for (let i=0;i<array33.length;i++){
//  const uiii= async(p)=>{
//     try{
//     const provider = new ethers.BrowserProvider(window.ethereum);
//     // await window.ethereum.request({ method: "eth_requestAccounts" });
//     // const signer = await provider.getSigner();
//     const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, provider);
//     const transaction = await contract.fetching_log_data(p);
//     transaction.wait();
//     console.log("fetching_log_data = "+transaction);
//     setResult([...result,transaction]);
//     console.log(result);
//     }
//     catch(e){
//     console.log("fetching_log_data Function At Ecommerce")
//     }
//     } ;
//      uiii(i);
// }

useEffect(() => {
  (async()=>{
  try{
      const provider = new ethers.BrowserProvider(window.ethereum);
      // await window.ethereum.request({ method: "eth_requestAccounts" });
      // const signer = await provider.getSigner();
      const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, provider);
      const transaction = await contract.fetching_log_data(1);
      transaction.wait();
      console.log("fetching_log_data = "+transaction.from);
      setResult([...result,transaction]);
      console.log(result);
      }
      catch(e){
      console.log("fetching_log_data Function At Ecommerce")
      }
    })();
  });

////////////////////////////////////////////////////////////////////

const [send, setSend] = useState({ address: "", coin: 0 ,weigth:0});

const handleInput2 = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  console.log(name, value);
  setSend({ ...send, [name]: value });
  // console.log(compDetails.name);
  // console.log(compDetails.category);
};

const handleSubmit = async(event) => {
  event.preventDefault();
  const provider = new ethers.BrowserProvider(window.ethereum);
await window.ethereum.request({ method: "eth_requestAccounts" });
const signer = await provider.getSigner();
const contract = new ethers.Contract(contract_address.smartContractAddress, electron.abi, signer);
const transaction = await contract.sendReward(send.address,send.coin,send.weigth);
transaction.wait();
setSend({ address: "", coin: 0 ,weigth:0})
};
/////////////////////////////////////////////////////////////////////////

//////////////////////////////sanjeeeevvvvvvvvv
const [basePrice, setBasePrice] = useState(0);
  const [wet, setWet] = useState(0);
  const [dry, setDry] = useState(0);
  const [surgeMultiplication, setSurgeMultiplication] = useState(3);
  const [weight, setWeight] = useState(0);

  const [morebasePrice, setmoreBasePrice] = useState(0);
  const [morewet, setmoreWet] = useState(0);
  const [moredry, setmoreDry] = useState(0);
  const [moresurgeMultiplication, setmoreSurgeMultiplication] = useState(1);
  const [moreweight, setmoreWeight] = useState(0);

  const calculatePrice = () => {
    const totalCost = basePrice + wet + dry;
    const totalPrice = totalCost * surgeMultiplication;
    return totalPrice.toFixed(2); // To display only two decimal places
  };

  const calculatemorePrice = () => {
    const moretotalCost = morebasePrice + morewet + moredry;
    const moretotalPrice = moretotalCost * moresurgeMultiplication;
    return moretotalPrice.toFixed(2); // To display only two decimal places
  };
////////////////////////////////////////////
return (
<>
<div className="flex justify-between items-center mx-4">
<div className="flex px-1 items-center rounded-md shadow-md justify-center">
<h1 className="font-semibold text-xl">Electro</h1>
<img className="w-[25px] h-[25px]" src={logo} />
</div>

<div>
<div className="">
<ul className="flex text-xl font-semibold gap-2 justify-center items-center py-2 list-none">
<li className="px-4 rounded-md shadow-lg">
<Link to="/Home">Home</Link>
</li>
<li className="px-4 rounded-md shadow-lg">
<Link to="/profile">Profile</Link>
</li>
<li className="px-4 rounded-md shadow-lg">
<Link to="/contact">Contact Us</Link>
</li>

</ul>
</div>
</div>

<div>
<button className="rounded-md shadow-lg mr-[20px] text-xl font-semibold">
<img className="w-[25px] h-[25px]" src={wallet} alt="wallet" />
</button>
</div>
</div>
<div className="mt-24">
<div className="flex flex-wrap lg:flex-nowrap justify-center ">
<div className="bg-white shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg h-[200px] rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
<div className="flex justify-between items-center">
<div>
<p className="font-bold text-black">ElectroCoin</p>
<p className="text-2xl">{total_amount}</p>
</div>
<button
type="button"
style={{ backgroundColor: currentColor }}
className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
>
₹
</button>
</div>
</div>
<div className="flex m-3 flex-wrap justify-center gap-1 items-center">
{array.map((item) => (
<div
key={item.title}
className="bg-white h-[200px] shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl "
>
<button
type="button"
style={{
color: item.iconColor,
backgroundColor: item.iconBg,
}}
className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
>
{item.icon}
</button>
<p className="mt-3">
<span className="text-lg font-semibold">{item.amount}</span>
{/* <span className={`text-sm text-${item.pcColor} ml-2`}>
{item.percentage}
</span> */}
</p>
<p className="text-sm text-gray-400 mt-1">{item.title}</p>
</div>
))}
</div>
</div>

<div className="flex gap-10 flex-wrap justify-center">
<div className="bg-white w-[600px] shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
<div className="flex justify-between items-center gap-2">
<p className="text-xl font-semibold">Bills</p>
{/* <DropDown currentMode={currentMode} /> */}
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
<p className="text-md font-semibold text-black">{item.title}</p>
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
className='w-24 bg-slate-200 rounded-lg'></input>
<button onClick={()=>people_spend(item.id)} className='w-12 bg-slate-500 rounded-lg'>Send</button>
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

<p className="text-gray-400 text-sm">-</p>
</div>
</div>
{/* <div>
<div
className=" rounded-2xl shadow-lg h-[600px] md:w-400 p-4 m-3"
style={{ backgroundColor: currentColor }}
>
<div className="flex justify-between items-center ">
<p className="font-semibold text-white text-2xl">Log</p>

<div>
<p className="text-2xl text-white font-semibold mt-8">
User Log
</p>
<p className="text-gray-200">Daily Log</p>
</div>
</div>

<div className="bg-orange-400">
{result.map((val)=>{
return(
<div>
<p>{val.from}</p><br/>
<p>{val.to}</p><br/>
<p>{val.value}</p>
<hr></hr> 
</div>
);
})
}
</div>
</div>
</div> */}
</div>

<div className="flex flex-wrap justify-center">
<div className="md:w-800 shadow-lg bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
<div className="flex justify-between">
<p className="text-xl font-semibold">Payment To Users</p><br/>
{/* <button
type="button"
className="text-xl font-semibold text-gray-500"
>
<IoIosMore />
</button> */}

<form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Enter The Address: </label>
              <input
                type="text"
                autoComplete="off"
                value={send.address}
                onChange={handleInput2}
                name="address"
                id="address"
                placeholder="Company Name"
              ></input>
            </div>

            <div>
              <label htmlFor="category">Enter The Coin: </label>
              <input
                type="number"
                autoComplete="off"
                value={send.coin}
                onChange={handleInput2}
                name="coin"
                id="coin"
                placeholder="Company Category"
              ></input>
            </div>
            <div>
              <label htmlFor="category">Enter The Trash Weigth : </label>
              <input
                type="number"
                autoComplete="off"
                value={send.weigth}
                onChange={handleInput2}
                name="weigth"
                id="weigth"
                placeholder="Company Category"
              ></input>
            </div>
            <button type="submit">Submit</button>
          </form>

</div>

<div>
</div>
</div>
</div>
<div className="flex w-full flex-col gap-[20px]">
        <h1 className="text-3xl font-bold px-[20px]">
          Waste Management Surge Price Calculator
        </h1>
        <div className="flex   px-[20px] items-center justify-between">
          <div className="w-1/2 rounded-md shadow-lg h-[300px] px-[10px] py-[10px] items-center">
            <h2 className="text-3xl font-semibold underline leading-wide mb-[10px]">
              Less Traffic Area
            </h2>
            <form className="w-full px-[20px] py-[30px]">
              <div>
                <input
                  value={basePrice}
                  onChange={(e) => setBasePrice(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-black font-semibold">
                  Enter base price
                </label>
              </div>
              <div>
                <input
                  value={wet}
                  onChange={(e) => setWet(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-black font-semibold">
                  Enter wet waste cost per kg
                </label>
              </div>
              <div>
                <input
                  value={dry}
                  onChange={(e) => setDry(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-black font-semibold">
                  Enter dry waste cost per kg
                </label>
              </div>
              <div>
                <input
                  value={surgeMultiplication}
                  onChange={(e) =>
                    setSurgeMultiplication(parseFloat(e.target.value))
                  }
                  type="number"
                />
                <label className="text-xl text-black font-semibold">
                  Enter surge multiplicator
                </label>
              </div>
              <div>
                <input
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-black font-semibold">
                  Enter weight (kg)
                </label>
              </div>
            </form>
            <p className="text-xl text-black font-semibold">
              Total Price: ₹{calculatePrice()}
            </p>
          </div>
          <div className="w-1/2 rounded-md shadow-lg h-[300px] px-[10px] py-[10px] items-center">
            <h2 className="text-3xl font-semibold underline leading-wide mb-[10px]">
              More Traffic Area
            </h2>
            <form className="w-full px-[20px] py-[30px]">
              <div>
                <input
                  value={morebasePrice}
                  onChange={(e) => setmoreBasePrice(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-black font-semibold">
                  Enter base price
                </label>
              </div>
              <div>
                <input
                  value={morewet}
                  onChange={(e) => setmoreWet(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-black font-semibold">
                  Enter wet waste cost per kg
                </label>
              </div>
              <div>
                <input
                  value={moredry}
                  onChange={(e) => setmoreDry(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-black font-semibold">
                  Enter dry waste cost per kg
                </label>
              </div>
              <div>
                <input
                  value={moresurgeMultiplication}
                  onChange={(e) =>
                    setmoreSurgeMultiplication(parseFloat(e.target.value))
                  }
                  type="number"
                />
                <label className="text-xl text-black font-semibold">
                  Enter surge multiplicator
                </label>
              </div>
              <div>
                <input
                  value={moreweight}
                  onChange={(e) => setmoreWeight(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-black font-semibold">
                  Enter weight (kg)
                </label>
              </div>
            </form>
            <p className="text-xl text-black font-semibold">
              Total Price: ₹{calculatemorePrice()}
            </p>
          </div>
        </div>
       
      </div>
</div>
</>
);
};

export default Ecommerce;

