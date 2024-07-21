import { cn } from "@/utils/cn";
import {GlobeDemo} from "@/components/ui/GridGlobe"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-5 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  id,
  icon,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  id: number;
  description?: string | React.ReactNode;
  img?: string;
  icon?: React.ReactNode;
  imgClassName?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative  overflow-hidden md:w-[100%] w-[90vw] md:h-auto h-[50vh]  rounded-2xl group/bento hover:shadow-md transition duration-300 shadow-input dark:shadow-[#3b3b3b]  dark:bg-black dark:border-white/[0.3]  border border-transparent justify-between flexborder-red-500 first-letter:flex flex-col space-y-4",
        className
      )}
    >
      <div className="w-full h-full absolute  ">
        {img && (
          <img
            className={cn(imgClassName, "w-full rounded-2xl h-full object-cover object-center ")}
            src={img}
          />
        )}
       
      </div>
      <div className="p-5  translate-x-0 md:p-3 flex flex-col relative rounded-md group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className=" md:text-2xl text-md font-sans   font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}

        </div>
        {id === 2 &&  <GlobeDemo/> }
      </div>
    </div>
  );
};
