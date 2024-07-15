import React from "react";

const GridBackgroundDemo = () => {
  return (
    <div className=" absolute top-0 left-0 h-[110vh] md:h-[100vh] w-[100%] dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.09] bg-grid-small-black/[0.7]  flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none dark:bg-black-100  bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
    </div>
  );
};

export default GridBackgroundDemo;
