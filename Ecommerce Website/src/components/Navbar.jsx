import React, { useState } from "react";
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu ] = useState("Home");
  return (
    <div className="flex justify-between border-b-[1px] border-[#0000002d] md:text-base text-xs md:px-4 md:py-2 p-[2%] items-center">
      <div className="logo flex space-x-2 items-center">
        <img
          className=" md:w-[4vw] md:h-[7vh]  w-[10vw] h-[10vh]"
          src="./images/ico.png"
          alt=""
        />
        <p className="font-semibold">Mega Mart</p>
      </div>
      <ul className="md:flex hidden md:space-x-12">
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
        <IoIosCart className="md:text-3xl text-xl" />
        <button className="bg-orange-500 active:bg-orange-600 text-white md:px-4 md:py-2 px-2 py-1 rounded-md md:text-sm text-[10px]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
