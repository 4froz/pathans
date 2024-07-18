import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  return (
    <div className="flex w-full flex-col bg-white">
      <Link
        // to={`/product/${product.name.replace(/\s+/g, "")}`}
        className="w-full"
      >
        <div className="h-48 md:h-auto ">
          <img
            src={
              "https://www.thecoutureclub.com/cdn/shop/files/TCCEcomm21.05.241131_2b659c10-0087-4e2b-9c69-a6d994f0f046.jpg?crop=center&height=400&v=1717766733&width=300"
            }
            className={`w-full rounded-md h-full object-cover cursor-pointer`}
            alt=""
          />
        </div>
      </Link>
      <div className="px-2 my-2 text-center flex flex-col">
        {/* Name */}
        <span className="text-base line-clamp-2 uppercase font-[r] font-medium cursor-pointer">
          CROCHET KNITTED CONTRAST STRIPE T-SHIRT
        </span>
        <span className="text-base  cursor-pointer">Rs. 16,000</span>
        {/* Desc */}
      </div>
    </div>
  );
};

export default HomeProductCard;
