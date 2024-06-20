import React from "react";
import Footer from "../components/footer";
import Bar from "../components/Bar";

const Cart = () => {
  return (
    <div>
      <div className="w-[100vw] bg-gray-100 h-[100vh] flex justify-center items-center flex-col space-y-4">
        <div className="title text-center p-4 mb-10 ">
          <p className="text-3xl md:text-5xl font-semibold  ">MY CART</p>
          <p className="md:text-xl">Items in your cart are displayed here,</p>
        </div>

        <div className="item border-b-[1px] border-t-[1px] border-black px-2 md:px-5 flex items-center  justify-between    w-[90vw] md:w-[80vw]  text-center py-2 md:py-5 ">
          <img
            className="w-[12vw] h-[12vw] md:h-[7vh] md:w-[4vw] border-[1px] border-black rounded-md"
            src="/images/mens/p1.jpg"
            alt=""
          />
          <div className="counter text-xl md:py-2 md:text-2xl flex space-x-2 bg-gray-300 px-2 rounded-md items-center text-center justify-center ">
            <p>Quantity</p>
            <p className="plus">-</p>
            <p className="num">1</p>
            <p className="minus">+</p>
          </div>
          <p>18$</p>
        </div>
        <div className="item border-b-[1px] border-t-[1px] border-black px-2 md:px-5 flex items-center  justify-between    w-[90vw] md:w-[80vw]  text-center py-2 md:py-5 ">
          <img
            className="w-[12vw] h-[12vw] md:h-[7vh] md:w-[4vw] border-[1px] border-black rounded-md"
            src="/images/mens/p2.jpg"
            alt=""
          />
          <div className="counter text-xl md:py-2 md:text-2xl flex space-x-2 bg-gray-300 px-2 rounded-md items-center text-center justify-center ">
            <p>Quantity</p>
            <p className="plus">-</p>
            <p className="num">2</p>
            <p className="minus">+</p>
          </div>
          <p>20$</p>
        </div>
        <div className="item border-b-[1px] border-t-[1px] border-black px-2 md:px-5 flex items-center  justify-between    w-[90vw] md:w-[80vw]  text-center py-2 md:py-5 ">
          <img
            className="w-[12vw] h-[12vw] md:h-[7vh] md:w-[4vw] border-[1px] border-black rounded-md"
            src="/images/womens/p1.jpg"
            alt=""
          />
          <div className="counter text-xl md:py-2 md:text-2xl flex space-x-2 bg-gray-300 px-2 rounded-md items-center text-center justify-center ">
            <p>Quantity</p>
            <p className="plus">-</p>
            <p className="num">1</p>
            <p className="minus">+</p>
          </div>
          <p>35$</p>
        </div>
        <div className="item border-b-[1px] border-t-[1px] border-black px-2 md:px-5 flex items-center  justify-between    w-[90vw] md:w-[80vw]  text-center py-2 md:py-5 ">
          <img
            className="w-[12vw] h-[12vw] md:h-[7vh] md:w-[4vw] border-[1px] border-black rounded-md"
            src="/images/kids/p2.jpg"
            alt=""
          />
          <div className="counter text-xl md:py-2 md:text-2xl flex space-x-2 bg-gray-300 px-2 rounded-md items-center text-center justify-center ">
            <p>Quantity</p>
            <p className="plus">-</p>
            <p className="num">4</p>
            <p className="minus">+</p>
          </div>
          <p>50$</p>
        </div>
      </div>
      <Footer />
      <Bar />
    </div>
  );
};

export default Cart;
