import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="flex w-full flex-col bg-white">
      <Link to={`/product/${product.name.replace(/\s+/g, '')}`} className="w-full">
        <div className="h-56 overflow-hidden rounded-md md:h-[440px] ">
          <img
            src={
              product.img
            }
            className={`w-full hover:scale-105 duration-500 rounded-md h-full object-cover cursor-pointer`}
            alt=""
          />
        </div>
      </Link>
      <div className="px-2 my-2 mt-4 text-center flex flex-col">
        {/* Name */}
        <span  className="text-base line-clamp-1 uppercase  font-medium cursor-pointer">
         {product.name}
        </span>
        <span className="text-base  cursor-pointer">
          Rs. ₹{product.price}
        </span>
        {/* Desc */}
      </div>
    </div>
  );
};

export default ProductCard;
