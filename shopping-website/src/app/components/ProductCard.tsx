import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
  lprice:string
}
const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
  lprice
}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-orange-500">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
        break;
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-orange-500">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
        break;
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-orange-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
        break;
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-orange-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
        break;
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-orange-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
        break;

      default:
        return null;
    }
  };

  return (
    <div className="py-5">
      <div className="p-2 border  flex-col bg-white border-gray-200 rounded-xl max-w-[400px] flex items-center min-h-[150px] lg:min-h-[250px]">
        <div>
          <img
            src={img}
            className="w-full h-auto"
            width={200}
            height={300}
            alt={title}
          />
        </div>
        <div className="space-y-2 py-2">
          <h2 className=" text-black font-semibold uppercase">{title}</h2>
          <p className="text-gray-600 text-xs sm:text-base max-w-[200px]">{desc}</p>
          <div className="text-gray-600 max-w-[200px]">
            {generateRating(rating)}
          </div>
          <div className="gap-4 text-black flex font-bold ">
            ${price} 
            <del className="text-gray-500 font-medium">${lprice}</del>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
