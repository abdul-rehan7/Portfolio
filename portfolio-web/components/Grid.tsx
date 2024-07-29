import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/Data";

const Grid = () => {
  return (
    <section className="flex justify-center" id="about">
      <BentoGrid className="max-w-[100vw] h-full ">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            img={item.img}
            key={item.id}
            title={item.title}
            description={item.description}
            className={i === 0 || i === 4 ? "md:w-[100%] md:col-span-2 md:row-span-2" : ""}
       
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
