import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/Data";

const Grid = () => {
  return (
    <section className="flex px-3" id="about">
      <BentoGrid className="max-w-6xl py-6 h-full   mx-auto">
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
