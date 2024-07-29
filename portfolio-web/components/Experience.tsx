import { workExperience } from "@/Data";
import { Button } from "@/components/ui/moving-border";
import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="pt-10 px-2 min-w-[100vw]  bg-black-100 z-40 ">
      <h1 className="heading">
        My
        <span className="text-black-300"> Work Experience</span>
      </h1>
      <div className=" lg:w-[97vw] w-[94vw] mt-7 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            className="flex items-center p-4 justify-items-start"
          >
            <div className="flex lg:flex-row flex-col lg:items-start p-3 py-12 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
            </div>
            <div>
              <div className="lg:ms-1 ">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {" "}
                  {card.title}
                </h1>
              </div>
              <div className="">
                <p className="text-start text-black mt-3 font-semibold">
                  {" "}
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
