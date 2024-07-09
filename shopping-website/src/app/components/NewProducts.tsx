import React from "react";
import ProductCard from "./ProductCard";

const prodData = [
  {
    img: "/imgs/prods/1.png",
    title: "I am title",
    desc: "i am the description of the product",
    rating: 4,
    lprice:"30.00",
    price: "45.00",
  },
  {
    img: "/imgs/prods/2.png",
    title: "I am title",
    desc: "i am the description of the product",
    rating: 4,
    lprice:"30.00",
    price: "45.00",
  },
  {
    img: "/imgs/prods/3.png",
    title: "I am title",
    desc: "i am the description of the product",
    rating: 4,
    lprice:"30.00",
    price: "45.00",
  },
  {
    img: "/imgs/prods/4.png",
    title: "I am title",
    desc: "i am the description of the product",
    rating: 3,
    lprice:"30.00",
    price: "45.00",
  },
  {
    img: "/imgs/prods/5.png",
    title: "I am title",
    desc: "i am the description of the product",
    rating: 4,
    lprice:"30.00",
    price: "45.00",
  },
  {
    img: "/imgs/prods/3.png",
    title: "I am title",
    desc: "i am the description of the product",
    rating: 1,
    lprice:"30.00",
    price: "45.00",
  },
  {
    img: "/imgs/prods/4.png",
    title: "I am title",
    desc: "i am the description of the product",
    rating: 4,
    lprice:"30.00",
    price: "45.00",
  },
  {
    img: "/imgs/prods/2.png",
    title: "I am title",
    desc: "i am the description of the product",
    rating: 2,
    lprice:"30.00",
    price: "45.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-7  text-[var(--third)]">
        <h2 className="font-medium text-4xl p-4 text-center ">New Arrivals</h2>
        <div className="grid grid-cols-2 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-7 xl:gap-y-7">
          {prodData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
              lprice={item.lprice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
