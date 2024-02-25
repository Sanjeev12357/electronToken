import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/electro.jpg"
import wallet from "../../assets/wallet.jpg"
const FORM_ENDPOINT = "https://public.herotofu.com/v1/4045c6f0-d33b-11ee-8644-e7a9ce58ae44"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
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
      <form
        className="w-full px-[200px] py-4"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="pt-0 mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <button
            className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-[300px] mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
