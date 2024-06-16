import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex bg-gray-200 justify-between md:text-sm text-[10px] py-[4%] px-[10%]">
      <div className="first">
      <p className="font-lg font-semibold ">Mega Mart</p>
      <p className="w-[30vw]">Offering a wide range of products with convenient home delivery and secure payment options.</p>
      </div>
      <div className="second flex flex-col">
        <p className="font-lg font-semibold ">Categories </p>
        <Link  to="/" className="font-lg">Home</Link>
        <Link  to="/mens" className="font-lg ">Mens</Link>
        <Link  to="/womens" className="font-lg ">Womens</Link>
        <Link  to="/kids" className="font-lg ">Kids</Link>
      </div>
      <div className="third">
      <p className="font-lg font-semibold ">Let us Help You</p>
      <p>Home</p>
      <p>Services</p>
      <p>About</p>
      <p>Contact</p>
    
      </div>
    </div>
  );
};

export default Footer;
