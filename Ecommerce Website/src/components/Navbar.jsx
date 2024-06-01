import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoIosCart } from "react-icons/io";



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
      <div className="lowerNavbar drop-shadow-xl shadow">

      </div>
    </div>
  );
};

export default Navbar;
