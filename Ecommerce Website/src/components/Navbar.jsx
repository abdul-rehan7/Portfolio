import React, { useState } from "react";
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu ] = useState("Home");
  return (
    <div className="flex justify-between border-b-[1px] border-[#0000002d] md:text-base text-xs md:px-6 md:py-4 p-[2%] items-center">
      <div className="logo flex space-x-2 items-center">
        <img
          className=" md:w-[10%] md:h-[7%]  w-[15%] h-[100%]"
          src="./images/ico.png"
          alt=""
        />
        <p className="font-semibold md:text-xl text-xl">Mega Mart</p>
      </div>
      <ul className="md:flex  hidden md:space-x-12">
        <li className="cursor-pointer" onClick={() => {setMenu("Home")}} > 
          Home {menu==="Home"?<hr/>:<></>}
        </li>
        <li  className="cursor-pointer"  onClick={() => {setMenu("Contact");}}
        >
          Contact {menu==="Contact"?<hr/>:<></>}
        </li>
        <li
           className="cursor-pointer" onClick={() => {
            setMenu("About");
          }}
        >
          About {menu==="About"?<hr/>:<></>}
        </li>
        <li
           className="cursor-pointer" onClick={() => {
            setMenu("Services");
          }}
        >
          Services {menu==="Services"?<hr/>:<></>}
        </li>
      </ul>

      <div className="order-cart flex h-auto text-center md:space-x-4 space-x-2 items-center">
        <button className="bg-orange-500 active:bg-orange-600 text-white md:px-4 md:py-2 px-1 md:w-[10vw] w-[25vw] py-2 rounded-full md:text-sm text-[15px]">
          Buy Now
        </button>
        <IoIosCart className="md:text-3xl text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
