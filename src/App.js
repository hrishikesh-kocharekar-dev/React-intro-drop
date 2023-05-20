import "./App.css";

import React, { useState } from "react";
import Home from "./components/Home";

function App() {
  const [open, setOpen] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("open");
  };

  return (
    <>
      <header
        className="p-5 flex items-center 
      justify-between"
      >
        <div className="lg:flex lg:items-center lg:items-start lg:justify-start">
          <img src="/logo.svg" className="lg:mr-4" alt="" />
          <nav className="navbar">
            <div>
              <button
                onClick={() => setOpen(!open)}
                className="flex justify-start items-center hover:text-yellow-300 duration-150 ease-in-out"
              >
                Features
                {open ? (
                  <img src="./arrow-up.svg" alt="" className="ml-2" />
                ) : (
                  <img src="./arrow-down.svg" alt="" className="ml-2" />
                )}
              </button>
              {open && (
                <ul className="mt-4 ml-4  lg:p-2 lg:shadow-md  lg:ml-0">
                  <li className="flex  items-center text-sm mb-4 justify-start">
                    <img src="todo.svg" alt="" className="mr-2 " />
                    Todo List
                  </li>
                  <li className="flex items-center text-sm mb-4 justify-start">
                    <img src="calendar.svg" alt="" className="mr-2" />
                    Calendar
                  </li>
                  <li className="flex items-center text-sm mb-4 justify-start">
                    <img src="reminders.svg" alt="" className="mr-2" />
                    Reminders
                  </li>
                  <li className="flex items-center text-sm mb-4 justify-start">
                    <img src="planning.svg" alt="" className="mr-2" />
                    Planning
                  </li>
                </ul>
              )}
            </div>
            {/* Company */}
            <div>
              <button
                onClick={() => setOpenCompany(!openCompany)}
                className="flex justify-start items-center  hover:text-yellow-300 duration-150 ease-in-out"
              >
                Company
                {openCompany ? (
                  <img src="./arrow-up.svg" alt="" className="ml-2" />
                ) : (
                  <img src="./arrow-down.svg" alt="" className="ml-2" />
                )}
              </button>

              {openCompany && (
                <ul className="mt-2 ml-3 lg:p-2 lg:shadow-md lg:ml-0">
                  <li className="flex items-center text-sm mb-2 justify-start  ">
                    <img src="" alt="" />
                    History
                  </li>
                  <li className="flex items-center text-sm mb-2 justify-start">
                    <img src="" alt="" />
                    Our Team
                  </li>
                  <li className="flex items-center text-sm mb-2 justify-start">
                    <img src="" alt="" />
                    Blog
                  </li>
                </ul>
              )}
            </div>
            <div className="lg:mb-0 ">
              <button className=" hover:text-yellow-300 duration-150 ease-in-out">
                Careers
              </button>
            </div>
            <div>
              <button className=" hover:text-yellow-300 duration-150 ease-in-out">
                About
              </button>
            </div>
          </nav>
        </div>

        <div className="lg:hidden">
          <button onClick={handleOpenMenu}>
            <img src="./menu.svg" alt="" className="menu-button" />
          </button>
        </div>

        <div className="hidden lg:block ">
          <button className="hover:text-yellow-300">Login</button>
          <button className="hover:bg-yellow-300 duration-200 ease-in-out hover:opacity-75 hover:text-white  border-2 border-[#333] md:ml-8 px-3 py-1 rounded-md">
            Register
          </button>
        </div>
      </header>
      <Home />
    </>
  );
}

export default App;
