import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/Data";

const Clients = () => {
  return (
    <div id="testimonials" className="py-10 bg-black-100 z-40 ">
      <h1 className="heading px-3">
        Kind Words From
        <span className="text-black-300"> Satisfied Clients</span>
      </h1>
      <div className="flex  py-7 flex-col items-center ">
        <InfiniteMovingCards
          className="h-[60vh] md:h-[20rem] items-center relative overflow-hidden flex flex-col rounded-md"
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center mt-10 gap-6 md:gap-16 max-lg:my-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5"></img>
              <img src={nameImg} alt={name} className="md:w-24 w-20"></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
