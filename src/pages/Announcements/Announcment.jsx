

import React, { useEffect, useState } from "react";
import { CreateTodo } from "./CreateTodo";
import { Todos } from "./Todos";
import wallet from "../../assets/wallet.jpg"

import logo from "../../assets/electro.jpg"
import { Link } from "react-router-dom";
const Announcment = () => {
  const [todos, setTodos] = useState([]);

  const func1 = async () => {
    // Corrected the placement of 'async'
    try {
      const res = await fetch("http://localhost:3001/todos", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await res.json();
      console.log(json);
      setTodos(json.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    func1();
  }, []); // Removed 'todos' from the dependency array to avoid an infinite loop

  return (
    <div>
      <div className="flex justify-between mb-2 shadow-md  items-center  mx-4">
        <div className="flex px-1 items-center hover:bg-slate-400 duration-300 hover:cursor-pointer rounded-md shadow-md justify-center">
          <h1 className="font-semibold  text-3xl">Electro</h1>
          <img className="w-[25px] h-[25px]" src={logo} />
        </div>

        <div>
          <div className="">
            <ul className="flex text-3xl font-semibold gap-2  justify-center items-center py-2 list-none">
              <li className="px-4 hover:bg-slate-400 duration-300 hover:cursor-pointer rounded-md shadow-lg">
                <Link to="/Home">Home</Link>
              </li>
              <li className="px-4 hover:bg-slate-400 duration-300 hover:cursor-pointer rounded-md shadow-lg">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="px-4 hover:bg-slate-400 duration-300 hover:cursor-pointer rounded-md shadow-lg">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="px-4 hover:bg-slate-400 duration-300 hover:cursor-pointer rounded-md shadow-lg">
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

      <Todos todos={todos}></Todos>
    </div>
  );
};

export default Announcment;
