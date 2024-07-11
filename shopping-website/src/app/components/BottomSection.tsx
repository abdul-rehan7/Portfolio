import React from "react";

const BottomSection = () => {
  return (
    <div className="flex justify-between sm:flex-row text-[.7rem] sm:text-base flex-col">
      <div className="left flex p-5 flex-row bg-[#d6d6d6] w-full">
        <div className="left flex p-5 flex-col bg-[#d6d6d6] w-full">
          <h1 className="text-[.7rem] sm:text-[1rem] font-semibold text-[var(--secondary)]">
            CUSTOMER CARE
          </h1>
          <a href="">Help Center</a>
          <a href="">How to Buy</a>
          <a href="">Returns & Refunds</a>
          <a href="">Contact Us</a>
        </div>
        <div className="left flex p-5 flex-col bg-[#d6d6d6] w-full">
          <h1 className="text-[.7rem] sm:text-[1rem] font-semibold text-[var(--secondary)]">
            SHOPPIN
          </h1>
          <a href="">About Us</a>
          <a href="">Digital Payments</a>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
      <div className="left flex p-5 flex-row bg-[#d6d6d6] w-full">
        <div className="left flex p-5 flex-col bg-[#d6d6d6] w-full">
          <h1 className="text-[.7rem] sm:text-[1rem] font-semibold text-[var(--secondary)]">
          SHOPINN PAYMENT PRODUCTS
          </h1>
          <a href="">Shoppin Business Card</a>
          <a href="">Shop with Points</a>
          <a href="">Shopinn Currency Converter</a>
          <a href="">Reload Your Balance</a>
        </div>
        <div className="left flex p-5 flex-col bg-[#d6d6d6] w-full">
          <h1 className="text-[.7rem] sm:text-[1rem] font-semibold text-[var(--secondary)]">
            GET TO KNOW US
          </h1>
          <a href="">Careers</a>
          <a href="">Blogs</a>
          <a href="">Shopin Devices</a>
          <a href="">Help</a>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
