import React, { useState } from "react";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <>
    <div className="flex justify-between bg-white border-b-[1px] border-[#0000002d] md:text-base text-xs md:px-6 md:py-4 p-[2%] items-center">
      <div className="logo flex space-x-2 items-center">
        <img
          className=" md:w-[10%] md:h-[7%]  w-[15%] h-[100%]"
          src="./images/ico.png"
          alt=""
        />

        <p className="font-semibold md:text-xl text-xl">Mega Mart</p>
      </div>
      <ul className="md:flex  hidden md:space-x-12">
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("Home");
          }}
        >
          <Link to="/">Home</Link> {menu === "Home" ? <hr /> : <></>}
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("Contact");
          }}
        >
          <Link to="/mens">Mens</Link> {menu === "Contact" ? <hr /> : <></>}
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("About");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "About" ? <hr /> : <></>}
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("Services");
          }}
        >
          <Link to="/womens">Womens</Link>{" "}
          {menu === "Services" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="order-cart flex h-auto text-center md:space-x-4 space-x-2 items-center">
        <button className="bg-orange-500 active:bg-orange-600 text-white md:px-4 md:py-2 px-1 md:w-[10vw] w-[25vw] py-2 rounded-full md:text-sm text-[15px]">
          <Link to="/login">Login</Link>
        </button>
        <Link to="/cart">
          {" "}
          <IoIosCart className="md:text-3xl text-2xl" />
        </Link>

        <div className="cart-count right-1 text-[10px] overflow-hidden top-1 w-4 h-4 md:w-4 md:h-4 md:top-4 text-xs absolute md:right-5 bg-red-600 text-white  rounded-full">
          0
        </div>
      </div>
    </div>
      <div className=" md:hidden text-[7px] bg-white py-[1px] flex justify-center">
      <ul className="  flex space-x-7 ">
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("Home");
          }}
        >
          <Link to="/">Home</Link> 
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("Contact");
          }}
        >
          <Link to="/mens">Mens</Link>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("About");
          }}
        >
          <Link to="/kids">Kids</Link>

        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setMenu("Services");
          }}
        >
          <Link to="/womens">Womens</Link>{" "}
    
        </li>
      </ul>
      </div>
    </>

  );
};

export default Navbar;
