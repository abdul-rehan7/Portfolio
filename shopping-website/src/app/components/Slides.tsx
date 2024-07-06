import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slides: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    
    <div className="outline-none  border-none relative">
 
      <div className="absolute left-[20px] md:left-[70px] max-w-[130px] sm:max-w-[450px] top-[50%] -translate-y-[50%] space-y-0 lg:space-y-1  sm:bg-transparent p-2 sm:p-0  rounded-lg sm:rounded-none">
        <h3 className="text-orange-600 font-semibold text-[.5rem] lg:text-[1.8rem]">
          {title}
        </h3>
        <h3 className="text-white font-bold text-[.7rem] lg:text-[3rem]">
          {mainTitle}
        </h3>
        <h3 className="text-[#bbbbbb]  text-[.4rem] lg:text-[1.2rem]">
          starting at <span className="font-bold text-[.5rem] lg:text-[1.5rem]">{price}</span>.00$
        </h3>
        <div className="text-[.4rem] cursor-pointer active: text-white   lg:text-[1rem] py-1 px-2  text-center items-center flex h-[1rem] w-[3rem] rounded-sm lg:w-[6rem] lg:h-[2rem] bg-orange-600">
          Shop Now
        </div>
      </div>
    
       <img src={img} className='w-[100%] h-[100%]' alt="" />
    </div>
  );
};

export default Slides;
