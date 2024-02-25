import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, ThemeSettings } from "./components";
import { Ecommerce, Orders, Employees, Customers } from "./pages";
import "./App.css";
import bot from "./assets/chatbot.jpg"
import { useStateContext } from "./contexts/ContextProvider";
import Home from "./pages/Main/Home";
import ContactForm from "./pages/Main/Contact";
import Flow from "./pages/Main/Flow";
import ChatBot from "./pages/Main/ChatBot";
import Announcment from "./pages/Announcements/Announcment";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const [prev,setPrev]=useState(0);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          <div
            className={
              false
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/Profile" element={<Ecommerce />} />

                {/* pages  */}
                <Route path="/Transactions" element={<Orders />} />
                <Route path="/Users" element={<Employees />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/Flow" element={<Flow />} />
                <Route path="/announcements" element={<Announcment />} />
              </Routes>
              <div
                onClick={() => {
                  setPrev(!prev);
                }}
                className="rounded-full border-2 hover:bg-slate-400 duration-300 ease-in-out border-black flex items-center justify-center shadow-lg w-[80px] h-[80px] relative left-[100px] top-[-800px]"
              >
                <img
                  src={bot}
                  alt="bot"
                  className="w-[60px] rounded-full h-[60px]"
                />
              </div>

              {!prev && (
                <div className="bg-slate-200  rounded-lg shadow-md relative left-[100px] top-[-800px] w-[400px] h-[500px] px-[5px] flex py-[10px]  overflow-y-scroll justify-center">
                  <ChatBot />
                </div>
              )}
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
