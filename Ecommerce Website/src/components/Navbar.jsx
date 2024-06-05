import React from "react";
import { Link } from "react-router-dom";
import { IoMdSearch, IoIosCart } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";

import {} from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      {/* UPPER NAVBAR  */}
      <div className="bg-green-500 upperNavbar flex justify-between p-2 md:py-2 md:px-5">
        <div className="logo flex items-center space-x-2  font-bold md:text-xl text-lg">
          <a href="">
            {/* LOGO  */}
            <img
              className="w-[10vw] md:w-[3vw]"
              src="/images/logo.png"
              alt=""
            />
          </a>
          <h1 className="text-white">Shopsy.</h1>
        </div>
        <div className="search-cart items-center flex space-x-0 md:space-x-0">
          <div className="search flex  items-center">
            {/* SEARCH  */}
            <input
              type="search"
              placeholder="Search..."
              className="md:w-[10vw] text-sm md:hover:w-[15vw] transition-all px-4 md:py-[7px] py-[5px] rounded-full  w-[30vw] hover:w-[45vw]"
            />
            <IoMdSearch className="-translate-x-6 md:-translate-x-8 text-[#a9a9a9]   md:w-[1.5rem] md:h-[1.5rem]" />
          </div>
          <div className="cart">
            {" "}
            <IoIosCart className="text-white w-[1.5rem] h-[1.5rem] " />
          </div>
        </div>
      </div>
      {/* LOWER NAVBAR  */}
      <div className="lowerNavbar md:h-[2rem] h-[0.9rem] text-[0.45rem] md:text-base drop-shadow-xl shadow flex justify-center md:space-x-16 space-x-3 py-[2px]">
        <Link to="/" className=" hover:text-green-600 transition-all">
          Home
        </Link>
        <Link to="/TopRated" className=" hover:text-green-600 transition-all">
          Top Rated
        </Link>
        <Link to="/KidsWear" className=" hover:text-green-600 transition-all">
          Kids Wear
        </Link>
        <Link to="/MensWear" className=" hover:text-green-600 transition-all">
          Mens Wear
        </Link>
        <Link
          to="/Electronics"
          className=" hover:text-green-600 transition-all"
        >
          Electronics
        </Link>
        <Link to="/Trending" className="group transition-all">
          <span className="flex items-center hover:text-green-600  ">
            Trending Items
            <FaCaretDown className="ml-2" />
          </span>
          <div className="drop-down text-sm bg-white  space-y-2 items-center drop-shadow-none  flex-col hidden group-hover:flex py-3 mt-[6%] ">
            <Link to="/TopRated">Top Rated</Link>
            <Link to="/KidsWear">Kids Wear</Link>
            <Link to="/MensWear">Mens Wear</Link>
            <Link to="/Electronics">Electronics</Link>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
