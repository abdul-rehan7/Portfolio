import React from "react";

const GridBackgroundDemo = () => {
  return (
    <div className=" absolute top-0 left-0 h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.07] bg-grid-black/[0.2]  flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none dark:bg-black-100  bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
    </div>
  );
};

export default GridBackgroundDemo;
