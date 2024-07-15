import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="flex w-full flex-col bg-white">
      <Link to={`/product/${product.name.replace(/\s+/g, '')}`} className="w-full">
        <div className="h-48 md:h-[440px] ">
          <img
            src={
              product.img
            }
            className={`w-full rounded-md h-full object-cover cursor-pointer`}
            alt=""
          />
        </div>
      </Link>
      <div className="px-2 my-2 text-center flex flex-col">
        {/* Name */}
        <span  className="text-base line-clamp-2 uppercase font-[r] font-medium cursor-pointer">
         {product.name}
        </span>
        <span className="text-base  cursor-pointer">
          Rs. {product.price}
        </span>
        {/* Desc */}
      </div>
    </div>
  );
};

export default ProductCard;
