import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Testimonial = () => {
  return (
    <div>
      <div className=" container py-16 grid-cols-2">
        <h1 className=" p-2 text-[var(--third)] text-[1.5rem] font-bold">Testimonials</h1>
        <div className="sm:grid w-full sm:space-y-0 space-y-3 gap-2 sm:grid-cols-12">
          <div className="col-span-4 rounded-md border-[1px] bg-[#d8d8d8] border-gray-300 flex flex-col items-center text-center  p-3 ">
            <img
              src="/imgs/prods/client.png"
              alt=""
              className=" h-[50px] w-[50px] sm:h-[150px] sm:w-[150px] rounded-full bg-[#ffffff]"
            />
            <h1 className="font-bold sm:text-2xl text-[#666666] text-[8px]">
              Robert Lawson
            </h1>
            <h1 className="text-[5px] sm:text-base font-medium">
              CEO & Founder CypherCrafts
            </h1>
            <RiDoubleQuotesL className="text-[var(--secondary)]" size={40} />
            <p className="text-[.6rem] sm:text-sm">
              Loremsmdm adae ipsum dolor sit amet mdafa consectetur adipisicing
              etetur magni debitis molestias. Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <RiDoubleQuotesR className="text-[var(--secondary)]" size={40} />
          </div>
          <div className="sm:col-span-8  rounded-md border-[1px] border-gray-300">
            <img
              className="max-h-[500px] rounded-md"
              src="/imgs/prods/banner.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
