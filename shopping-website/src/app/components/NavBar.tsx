import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      {/* TOP NAVBAR  */}
      <div className="border-b border-gray-300 hidden sm:block ">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <div className="hidden lg:flex gap-2">
              <div className="icon_wrapper">
                <FaFacebook />
              </div>
              <div className="icon_wrapper">
                <FaInstagram />
              </div>
              <div className="icon_wrapper">
                <FaLinkedin />
              </div>
              <div className="icon_wrapper">
                <FaTwitter />
              </div>
            </div>

            <div className="text-gray-400 text-[.9rem]">
              <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
            </div>

            <div className="flex gap-5">
              <select
                className="text-gray-400 text-[.8rem] w-[5rem]"
                name="currency"
                id="currency"
              >
                <option value="USD $">USD $</option>
                <option value="EUR €">EUR €</option>
                <option value="INR ₹">INR ₹</option>
              </select>
              <select
                className="text-gray-400 text-[.8rem] w-[5rem]"
                name="langs"
                id="langs"
              >
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            <div className="theme-btn">
              <div className="cir"></div>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* MIDDLE NAVBAR */}
      <div className="border-b border-gray-300 py-6 px-4">
        <div className="container sm:flex justify-between items-center">
          <div className="text-3xl text-center font-bold pb-4 sm:pb-0 text-[var(--third)]">
            ShopInn
          </div>
          <div className="w-full sm:w-[300px] md:w-[70%] relative pb-4 sm:pb-0 text-[var(--third)]">
            <input
              className="p-2 px-4 border rounded-lg w-full border-gray-300"
              type="search"
              placeholder="Search..."
            />
            <BsSearch className="hidden right-0 top-0 mr-3 mt-3  text-gray-400" />
          </div>

          <div className="hidden lg:flex gap-4 test-gray-500 text-[1.5rem]">
            <BiUser />
            <FiHeart />
            <HiOutlineShoppingBag />
          </div>
        </div>
      </div>
      {/* LOWER NAVBAR  */}
      <div className="hidden lg:block ">
        <div className="container">
          <div className="flex w-fit mx-auto gap-10 py-4">
            <Link href="#" className="Nav_Link relative">
              HOME
            </Link>
            <Link href="#" className="Nav_Link relative">
              CATOGORIES
            </Link>
            <Link href="#" className="Nav_Link relative">
              MEN'S
            </Link>
            <Link href="#" className="Nav_Link relative">
              WOMEN'S
            </Link>
            <Link href="#" className="Nav_Link relative">
              JEWELRY
            </Link>
            <Link href="#" className="Nav_Link relative">
              PERFUME
            </Link>
            <Link href="#" className="Nav_Link relative">
              BLOG
            </Link>
            <Link href="#" className="Nav_Link relative">
              HOT OFFERS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
