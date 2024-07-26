import React from "react";
import { projects } from "@/Data";
import { PinContainer } from "@/components/ui/3d-pin";

const RecentProjects = () => {
  return (
    <div  className="py-10 z-40 ">
      <h1 className="heading">
        Small selection of {""}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex  flex-wrap items-center justify-center lg:gap-36 gap-16 mt-4">
        {projects.map(({ id, title, des, img, link, iconLists }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] "
          >
            <PinContainer title={"Visit"} href={link}>
              <div className="relative  flex items-center sm:w-[35vw] w-[80vw] overflow-hidden h-[40vh]">
                <div className="relative  w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 overflow-hidden absolute bottom-0"
                />
              </div>
              <h1 className="font-bold m-2 lg:text-2xl md:text-xl text-base">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal m-2 lg:h-28 h-12 font-light text-sm">
                {des}
              </p>
              <div className="flex items-start justify-between mt-2 mb-2 ">
                <div className="flex items-center ">
                  {iconLists.map((icon) => (
                    <div key={icon} className="border flex justify-center mx-1 items-center rounded-full bg-black h-8 w-8 lg:h-10 lg:w-10 border-white/[0.2]">
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
